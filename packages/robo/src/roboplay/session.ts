import { color } from '../core/color.js'
import { logger } from '../core/logger.js'
import { mkdirSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { readFile, unlink, writeFile } from 'node:fs/promises'
import type { Robo, User } from './types.js'

export const RoboPlaySession = {
	clear,
	get,
	save
}

interface Session {
	linkedProjects: Record<string, string>
	robos: Robo[]
	user: User
	userToken: string
}

/**
 * Clear the RoboPlay session from the home directory.
 */
async function clear() {
	// Find the session file
	const sessionPath = path.join(os.homedir(), '.robo', 'roboplay', 'session.json')
	logger.debug(`Clearing session file at ${sessionPath}`)

	// Sad face... goodbye session file!
	await unlink(sessionPath)
}

/**
 * Get the RoboPlay session from the home directory.
 */
async function get() {
	// Find the session file
	const sessionPath = path.join(os.homedir(), '.robo', 'roboplay', 'session.json')
	logger.debug(`Reading RoboPlay session file at ${sessionPath}`)

	// Read the session file
	try {
		const sessionData = await readFile(sessionPath, 'utf-8')
		const session = JSON.parse(sessionData) as Session

		return session
	} catch (error) {
		logger.debug(`No RoboPlay session found.`)
		return null
	}
}


async function save(options: SaveOptions) {
	const { user, userToken } = options

/**
 * Save the RoboPlay session to the home directory.
 */
	// Save to home directory
	const sessionPath = path.join(os.homedir(), '.robo', 'roboplay', 'session.json')
	logger.debug(`Writing session file to ${sessionPath}`)

	// Let's write the session file!
	mkdirSync(path.dirname(sessionPath), { recursive: true })
	await writeFile(sessionPath, JSON.stringify(session, null, 2))
	logger.debug(`Session file written successfully!`)
}