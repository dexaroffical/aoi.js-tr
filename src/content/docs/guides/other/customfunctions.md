---
title: Custom Functions
description: This guide is covering custom functions, their usage and some useful examples.
id: custom-functions
---

<!-- omit from toc -->

### Table of Content

- [Getting Started with Custom Functions](#getting-started-with-custom-functions)
  - [Aoi.js Custom Functions](#aoijs-custom-functions)
  - [Discord.js Custom Functions](#discordjs-custom-functions)
- [Custom Functions Examples](#custom-functions-examples)
  - [Aoi.js Custom Functions Examples](#aoijs-custom-functions-examples)
  - [Discord.js Custom Functions Examples](#discordjs-custom-functions-examples)

---

## Getting Started with Custom Functions

:::tip[Experienced Users]
Please note that this is most likely only useful for advanced aoi.js users, or users with some JavaScript knowledge.
:::

To begin with, there are two types of custom functions.

`aoi.js` custom functions and `djs` custom functions.

As you may can tell by the name `aoi.js` custom functions include aoi.js functions, on the other side `djs` refers to `discord.js` which means it will create a discord.**js** custom function using discord.**js** functions/syntax.

### Aoi.js Custom Functions

```js
bot.functionManager.createFunction({
    name: "$function", // custom function name, can be anything.
    params: [ "parameter", ... ], // function parameters, $function[parameter;parameter]
    type: "aoi.js", // custom function type
    code: "..." // the code that will be executed
});
```

Pretty simple example, and usage.

- To return any parameter of `params: [...]` you can use `{name}` (name stands for the parameter name).

---

### Discord.js Custom Functions

```js
bot.functionManager.createFunction({
    name: "$function", // custom function name, can be anything.
    type: "djs", // custom function type
    code: ... // the code that will be executed
});
```

```js {10-13}
bot.functionManager.createFunction({
  name: "$function",
  type: "djs",
  code: async d => { // fetching data
    const data = d.util.aoiFunc(d);
    const [parameter, ...] = data.inside.splits; // command parameters

    ... // your code

    data.result = ... // needed for the function to properly work, will set the "output" of the function
    return {
      code: d.util.setCode(data) // will return the output from data.result
    };
  }
});
```

You can create error messages like the following;

For message errors:

```js
aoiError.fnError(d, type, data, message);
```

For console errors:

```js
aoiError.consoleError(name, e);
```

| TYPE    | RETURNS                            |
| ------- | ---------------------------------- |
| member  | Invalid Member ID Provided In ...  |
| message | Invalid Message ID Provided In ... |
| channel | Invalid Channel ID Provided In ... |
| user    | Invalid User ID Provided In ...    |
| role    | Invalid Role ID Provided In ...    |
| guild   | Invalid Guild ID Provided In ...   |
| emoji   | Invalid Emoji ID Provided In ...   |
| option  | Invalid Option ID Provided In ...  |
| custom  | Invalid [custom message]           |

```js
if (!parameter)
  return d.aoiError.fnError(d, "custom", {}, "Custom Error Message");
// will return a error message when the parameter "parameter" doesn't have any arguments.
```

## Custom Functions Examples

Advanced Custom Functions Examples can be found here, some are useful others are more likely miscellaneous.

### Aoi.js Custom Functions Examples

In this example, we are creating a simple `$say` function, which will add the user and message to the given text.

"**{user}** says: **{message}**" We also disabled the mentions to avoid abuse.

```ts
$say[userID?;message]
```

```js
bot.functionManager.createFunction({
  name: "$say", // our function name
  params: ["userID", "message"], // our parameter, to use them later
  type: "aoi.js",
  code: ` 
    **$userTag[$replaceText[$replaceText[$checkCondition[{userID}==||{userID}==undefined];true;$authorID];false;{userID}]]** says: **{message}**
    $disableMentionType[everyone]
  `
});
```

### Discord.js Custom Functions Examples

In this example we will create a custom function which sends an image as an attachment. The usage is as following:

```ts
$sendImage[URL];
```

```js
bot.functionManager.createFunction({
  name: "$sendImage", // our function name
  type: "djs", // notice how we don't need any params? that's the magic of JavaScript
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [URL] = data.inside.splits; // our parameter of the function

    let image = URL;
    const a = await d.message.channel.send({
      // send the attachment in the current channel
      files: [
        {
          attachment: image, // set the given URL as attachment
        },
      ],
    });

    data.result = a; // set the "message" as result, to make aoi.js acknowledge it
    return {
      code: d.util.setCode(data),
    };
  },
});
```
