const consts = require('./consts');

let queue = consts.queue;

function add(id) {
  if (id) {
    return queue.add(id)
  } else {
    throw new Error('Empty queue item:' + JSON.stringify(id))
  }
}

export default add
