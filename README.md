# Robo

Robo is a lightweight, supercharged Node.js metaframework for Discord.js, designed to make building Discord bots a breeze. It features a powerful plugin architecture and simplified interaction handling with Sage, all while allowing full access to the underlying Discord.js features.

> **Note:** This is a pre-release and is likely to undergo breaking changes before reaching version 1.0.

## Installation

```bash
npm install @roboplay/discord
```

## Getting Started

Check out the three example projects included in the GitHub repo to help you get started:

- [Starter JavaScript](/examples/starter-javascript/)
- [Starter TypeScript](/examples/starter-typescript/)
- [Chatbot w/ GPT plugin](/examples/gpt-chatbot/)

## Features

- **Easy command and event creation:** Simply create .ts or .js files in the appropriate directories.
- **Sage:** A built-in mechanism for simplified interaction handling.
- **Plugins:** Install npm packages and configure them in your project to extend your bot's functionality.
- **CLI:** Includes commands like doctor, invite, and deploy for convenient bot management and deployment.
- **RoboPlay integration:** Host your Robo-powered bots on the RoboPlay service, with both free and paid tiers available.

## Command Handling

Creating commands is easy with Robo's file-based structure. For example, to create a /ping command, follow this structure:

```bash
/src
  /commands
    ping.js
```

The `ping.js` file can be as simple as:

```javascript
export default () => {
  return 'Pong!'
}
```

You can further customize the command by exporting a `config` object:

```javascript
export const config = {
	description: 'Replies with Pong!'
}

export default () => {
  return 'Pong!'
}
```

## Event Listening

Event listening works similarly to command handling by using a file-based structure. For example, to create a ready event listener:

```bash
/src
  /events
    ready.js
```

The ready.js file can be as simple as:

```javascript
export default () => {
	// This event will run if the bot starts, and logs in, successfully.
}
```

To register multiple listeners for the same event, use directories instead of files:

```bash
/src
  /events
    /ready
      one.js
      example.js
```

The file names can be anything you want, but we recommend using descriptive names.

## CLI
The built-in CLI features the following commands:

- `dev`: Run your bot in development mode.
- `build`: Build your bot for production.
- `start`: Start your bot.
- `doctor`: Verify that your project is set up correctly.
- `invite`: Generate URLs to add your Robo to servers (in beta).
- `deploy`: Host your bot on RoboPlay for free.

## Configuration

Robo supports configuration through a configuration file, allowing you to enable or disable features like Sage, set up permissions and intents, and configure installed plugins.

```javascript
// @ts-check

/**
 * @type {import('@roboplay/discord').Config}
 **/
export default {
	intents: ['Guilds', 'GuildMessages', 'MessageContent']
}
```

## License

MIT License

Copyright (c) 2023 WavePlay
