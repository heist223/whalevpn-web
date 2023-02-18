const general = require('../configs/general.config')
var path = require('path');
let filename = path.basename(__filename);

async function get(req, res, next) {
  return res.sendFile(general.appDir + '/public/html/index-prod.html');
}

async function create(req, res, next) {
  return res.status(405)
}

async function update(req, res, next) {
  return res.status(405)
}

async function remove(req, res, next) {
  return res.status(405)
}

module.exports = {
  get,
  create,
  update,
  remove
};
