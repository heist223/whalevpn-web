const service = require('../../services/api/login.service')

async function get(req, res, next) {
  return res.status(405)
}

async function create(req, res, next) {
  let resp = await service.findAccount(res.locals.merged)
  return res.status(resp.code).json(resp)
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
