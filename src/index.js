const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const debug = require('metalsmith-debug');
const remarkTextr = require('remark-textr');

const remark = require('./plugin/remark');
const typo = require('./plugin/typo');
const core = require('./core');

const layoutFolder = __dirname + '/layout';

Metalsmith(__dirname)
  .metadata({})
  .source('../content')
  .destination('../docs')
  .clean(false)
  .use(
    remark([
      [remarkTextr, { plugins: [typo] }]
    ])
  )
  .use(core)
  .use(debug())
  .use(
    layouts({
      directory: layoutFolder,
      engineOptions: {
        path: layoutFolder
      }
    })
  )
  .build(function(err) {
    if (err) {
      throw err;
    }
  });
