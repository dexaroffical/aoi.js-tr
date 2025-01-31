---
title: Client Sharding
description: This guide will be covering the functionality and usage of client sharding.
id: sharding
---

<!-- omit from toc -->
### Table of Contents

- [What's Sharding?](#whats-sharding)
- [Getting Started](#getting-started)
  - [Constructor](#constructor)
  - [`options`](#options)
- [Setting up Sharding](#setting-up-sharding)
- [Sharding Related Functions](#sharding-related-functions)

---

## What's Sharding?

As a bot developer, you may have experienced some limitations when scaling up your Discord bot to serve a large number of users. Discord imposes a maximum limit of 2500 guilds per bot, and if your bot exceeds this number, Discord enforces a sharding strategy to split portions of your bot into separate processes.

Sharding is an effective way to distribute your bot's workload across multiple servers, which can greatly enhance the bot's performance and reduce the strain on any single server. Once you've reached the 2500-guild limit, Discord requires that you shard your bot in a way that allocates no more than 2500 guilds per shard.

To make the sharding process easier for bot developers, aoi.js provides built-in support for sharding. Developers can split their bot's workload into smaller, more manageable parts, each of which runs in its own separate process. The recommended number of guilds per shard is around 1000, but this can vary depending on your bot's functionality and complexity.

One advantage of sharding is that it allows you to split your bot's workload across multiple servers, which can reduce the processing load on any one server and make your bot more responsive. Additionally, sharding can be useful in scenarios where you need to run multiple instances of your bot for different users or groups of users.

In some cases, you may want some or all of your shards to be in the same process, allowing for a shared state. This is possible with aoi.js, which provides a flexible and powerful built-in handler for managing the sharding process. With the ability to split your bot's workload across multiple processes, you can ensure that your bot runs smoothly, even as its user base grows over time.

## Getting Started

aoi.js has the `ClientShard` class to handle Sharding for your Discord Bot, this works similar to the [`ShardingManager` of discord.js](https://old.discordjs.dev/#/docs/discord.js/14.13.0/class/ShardingManager).

### Constructor

```js
new ClientShard(file, options);
```

| Parameter |                                               Type                                                | Description                      |
| --------- | :-----------------------------------------------------------------------------------------------: | -------------------------------- |
| `file`    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Path to your main file           |
| `options` | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Options for the sharding manager |

### `options`

| Parameter     |                                               Type                                                | Description                                                                                                   |
| ------------- | :-----------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------- |
| `token`       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Token to use for automatic shard count and passing to shards                                                  |
| `totalShards` | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Number of total shards of all shard managers or "auto"                                                        |
| `shardList`   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | List of shards to spawn or "auto"                                                                             |
| `mode`        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Which mode to use for shards                                                                                  |
| `respawn`     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Whether shards should automatically respawn upon exiting                                                      |
| `silent`      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Whether to pass the silent flag to child process (only available when mode is set to 'process')               |
| `shardArgs`   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Arguments to pass to the shard script when spawning (only available when mode is set to 'process')            |
| `execArgv`    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Arguments to pass to the shard script executable when spawning (only available when mode is set to 'process') |

## Setting up Sharding

Before we begin with the code, you must create two files.

One called `index.js` and another one with the name `shard.js`.

```js title="shard.js"
const { ClientShard } = require("aoi.js");

const sharder = new ClientShard("./index.js", {
  // Your main file, in this case called "index.js".
  token: "Discord Bot Token", // Your Discord Bot token.
  totalShards: 3, // The amount of shards/instances you want to create, in this case three.
});

sharder.on("shardCreate", (shard) => console.log(`Launched shard ${shard.id}`)); // Used for debugging, can be removed.
sharder.startProcess(); // Starts the sharding process.
```

Your index.js, also known as main file should look like the following (nothing changes..!):

```js title="index.js"
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "Discord Bot Token",
  prefix: "Discord Bot Prefix",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  }
});

// Ping Command Example (sharding)
client.command({
  name: "ping",
  code: `Pong! $guildShardPing[0]ms`
});
```

Then by running `node shard.js` you are able to start your bot.

:::caution[Start Command]

Running `node index.js` will no longer work if you want to have sharding, use `node shard.js`.

:::

---

## Sharding Related Functions

- `$shard[option]`
- `$guildShard[option?;sep?;shardId]`
- `$guildShardID`
- `$guildShardPing[shardId?]`
- `$killShard[shardId]`
- `$respawnAllShards`
- `$spawnShard[amount]`
