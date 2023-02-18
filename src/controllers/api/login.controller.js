const general = require('../../configs/general.config')

async function get(req, res, next) {
  return res.status(405)
}

async function create(req, res, next) {
  return res.status(200).json({
    success: true,
    user: {
      username: "heist223",
      password: "bnmg0416"
    },
    serverList: [
      {
        "countryCode": 0,
        "server": "p195.panda002.net",
        "username": "123",
        "password": "qwerREWQ!!",
      }
    ]
  })
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
