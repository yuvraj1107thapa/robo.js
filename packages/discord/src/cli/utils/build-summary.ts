import fs from 'node:fs/promises'
import path from 'node:path'
import chalk from 'chalk'
import { logger } from '../utils/logger.js'
import { performance } from 'node:perf_hooks'
import { Manifest } from '../../types/index.js'
import { packageJson } from '../index.js'

export async function getProjectSize(directory: string): Promise<number> {
	let entries = await fs.readdir(directory, { withFileTypes: true })
	let size = 0

	// devDependencies don't count towards the project size
	if (directory.endsWith('node_modules')) {
		entries = entries.filter(
			(entry) =>
				!Object.prototype.hasOwnProperty.call(packageJson.devDependencies ?? {}, entry.name) && entry.name !== '.bin'
		)
	}

	for (const entry of entries) {
		const entryPath = path.join(directory, entry.name)

		if (entry.isDirectory()) {
			size += await getProjectSize(entryPath)
		} else if (entry.isFile() && entry.name !== '.DS_Store') {
			const stats = await fs.stat(entryPath)
			size += stats.size
		}
	}

	return size
}

export function printBuildSummary(manifest: Manifest, totalSize: number, startTime: number, plugin: boolean) {
	const maxLength = Math.min(Math.max(...Object.keys(manifest.commands).map((cmd) => cmd.length), 15), 30)
	logger.log(chalk.bold(`\nType        Name${' '.repeat(maxLength - 2)}Description`))
	logger.log(`─`.repeat(maxLength + 30))

	let autoGeneratedExists = false
	for (const [command, commandData] of Object.entries(manifest.commands)) {
		const autoSymbol = commandData.__auto ? '  Δ ' : '    '
		if (commandData.__auto) {
			autoGeneratedExists = true
		}
		logger.log(
			chalk.bold.blue('Command ' + autoSymbol) +
				`${chalk.bold(('/' + command).padEnd(maxLength + 1))} ${commandData.description ?? ''}`
		)
	}

	for (const event of Object.keys(manifest.events)) {
		logger.log(chalk.bold.magenta('Event       ') + `${chalk.bold(event).padEnd(maxLength + 1)}`)
	}

	// Format sizing information
	let sizeText = ''
	if (totalSize < 1024 * 1024) {
		sizeText = `${(totalSize / 1024).toFixed(2)} kB`
	} else if (totalSize < 1024 * 1024 * 1024) {
		sizeText = `${(totalSize / (1024 * 1024)).toFixed(2)} MB`
	} else {
		sizeText = `${(totalSize / (1024 * 1024 * 1024)).toFixed(2)} GB`
	}

	let sizeColor = chalk.green
	if (totalSize >= 1024 * 1024 * 1024) {
		sizeColor = chalk.bold.red.bgBlack.underline
	} else if (totalSize >= 100 * 1024 * 1024) {
		sizeColor = chalk.red
	} else if (totalSize >= 25 * 1024 * 1024) {
		sizeColor = chalk.yellow
	}

	const buildTime = Math.round(performance.now() - startTime)
	let buildColor = chalk.green
	if (buildTime < 5000) {
		buildColor = chalk.green
	} else {
		buildColor = chalk.yellow
	}

	if (autoGeneratedExists) {
		logger.log(chalk.cyan(`\n${chalk.bold('Δ')} = Automatically generated`))
	}

	logger.log(chalk.bold(`\n${plugin ? 'Plugin' : 'Robo'} size: `) + sizeColor(sizeText))
	if (buildTime < 1000) {
		logger.log(buildColor(`Built in ${buildTime}ms\n`))
	} else {
		logger.log(buildColor(`Built in ${(buildTime / 1000).toFixed(2)}s\n`))
	}
}
