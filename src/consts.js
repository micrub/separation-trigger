const Queue = require('persistent-queue');
const MAINTAIN = 'maintain';
const queue = new Queue(MAINTAIN);

const NS = 'separation-trigger';
module.exports = { queue, NS }
