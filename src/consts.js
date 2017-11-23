const Queue = require('persistent-queue');
const MAINTAIN = 'maintain';
const queue = new Queue(MAINTAIN);

module.exports = { queue }
