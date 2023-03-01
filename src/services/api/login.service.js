const dbo = require('../../../db/conn')

async function login({activationKey, deviceId}) {
    const accountsCollection = dbo.getAccountsCollection()
    let accounts = await accountsCollection.find({activationKey: activationKey})
    accounts = await accounts.toArray()
    let account = accounts[0]

    if (!account) return {
        success: false,
        message: "올바르지 않거나 만료된 활성화 키 입니다.",
        code: 401
    }

    let loggedInDevicesCount = account.loggedInDevices.length
    let maxDeviceCount = account.maxDeviceCount

    let deviceIdAlreadyExists = account.loggedInDevices.indexOf(deviceId) > -1

    if (loggedInDevicesCount >= maxDeviceCount && !deviceIdAlreadyExists) return {
        success: false,
        message: '최대 로그인 가능한 기기 개수를 초과했습니다.',
        code: 200
    }

    if (!deviceIdAlreadyExists) {
        let updateRes = await accountsCollection.updateOne(
            {activationKey: activationKey},
            {
                $push: {
                    loggedInDevices: deviceId 
                }
            }
        )
    }

    return {
        success: true,
        message: "성공적으로 로그인했습니다.",
        account: account,
        serverList : [
            {
                "id": 0,
                "countryCode": "KR",
                "uri": "p221.panda001.net",
                "name": "한국 1",
            },
            {
                "id": 1,
                "countryCode": "KR",
                "uri": "p221.panda001.net",
                "name": "한국 2",
            },
            {
                "id": 2,
                "countryCode": "KR",
                "uri": "p221.panda001.net",
                "name": "한국 3",
            },
            {
                "id": 3,
                "countryCode": "KR",
                "uri": "p221.panda001.net",
                "name": "한국 4",
            },
            {
                "id": 4,
                "countryCode": "KR",
                "uri": "p221.panda001.net",
                "name": "한국 5",
            },
            {
                "id": 5,
                "countryCode": "KR",
                "uri": "p221.panda001.net",
                "name": "한국 6",
            },
            {
                "id": 6,
                "countryCode": "KR",
                "uri": "p221.panda001.net",
                "name": "한국 7",
            },
            {
                "id": 7,
                "countryCode": "KR",
                "uri": "p221.panda001.net",
                "name": "한국 8",
            },
            {
                "id": 8,
                "countryCode": "KR",
                "uri": "p221.panda001.net",
                "name": "한국 9",
            },
            {
                "id": 9,
                "countryCode": "KR",
                "uri": "p221.panda001.net",
                "name": "한국 10",
            },
            {
                "id": 10,
                "countryCode": "KR",
                "uri": "p221.panda001.net",
                "name": "한국 11",
            },
            {
                "id": 11,
                "countryCode": "KR",
                "uri": "p221.panda001.net",
                "name": "한국 12",
            }
        ],
        code: 200
    }


}

module.exports = {
   login 
}