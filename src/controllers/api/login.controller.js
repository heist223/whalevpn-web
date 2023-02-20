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
        "id": 0,
        "countryCode": "KR",
        "uri": "p195.panda002.net",
        "name": "한국 1",
      },
      {
        "id": 1,
        "countryCode": "KR",
        "uri": "p195.panda002.net",
        "name": "한국 2",
      },
      {
        "id": 2,
        "countryCode": "KR",
        "uri": "p195.panda002.net",
        "name": "한국 3",
      },
      {
        "id": 3,
        "countryCode": "KR",
        "uri": "p195.panda002.net",
        "name": "한국 4",
      },
      {
        "id": 4,
        "countryCode": "KR",
        "uri": "p195.panda002.net",
        "name": "한국 5",
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
