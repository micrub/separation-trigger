const process = require('process');
const commandLineArgs = require('command-line-args')
const commandLineUsage = require('command-line-usage')
const add = require('./add');

const optionDefinitions = [
  { name: 'verbose', alias: 'v', type: Boolean, defaultOption: false },
  { name: 'id', alias: 'i', type: String },
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    description: 'Display this usage guide.'
  },
];


function showHelp(option) {
  if (option.help) {
    const usage = commandLineUsage([
      {
        header: 'Triggers web clients redirect to maintainance page.',
        content: 'id must be unique, and wil be used to as a link to content rendered on maintainance page.'
      },
      {
        header: 'Options',
        optionList: optionDefinitions
      },
      {
        content: 'Project home: [underline]{https://github.com/me/example}'
      }
    ])
    console.log(usage);
    process.exit(0)
  }
}

try {
  const option = commandLineArgs(optionDefinitions)
  showHelp(option)
} catch (e) {
  /* handle error */
  console.log(e)
}


