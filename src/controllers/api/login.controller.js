async function get(req, res, next) {
  return res.status(405)
}

async function create(req, res, next) {
  return res.status(200).json({
    success: true,
    user: {
      name: "heist223",
      joinedAt: 1677065015998,
      expireAt: 1677065016000,
      code: "FJ18-F13I-4712-A23K"
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
      },
      {
        "id": 5,
        "countryCode": "KR",
        "uri": "p195.panda002.net",
        "name": "한국 6",
      },
      {
        "id": 6,
        "countryCode": "KR",
        "uri": "p195.panda002.net",
        "name": "한국 7",
      },
      {
        "id": 7,
        "countryCode": "KR",
        "uri": "p195.panda002.net",
        "name": "한국 8",
      },
      {
        "id": 8,
        "countryCode": "KR",
        "uri": "p195.panda002.net",
        "name": "한국 9",
      },
      {
        "id": 9,
        "countryCode": "KR",
        "uri": "p195.panda002.net",
        "name": "한국 10",
      },
      {
        "id": 10,
        "countryCode": "KR",
        "uri": "p195.panda002.net",
        "name": "한국 11",
      },
      {
        "id": 11,
        "countryCode": "KR",
        "uri": "p195.panda002.net",
        "name": "한국 12",
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
