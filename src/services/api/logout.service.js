const dbo = require('../../../db/conn')

async function logout({activationKey, deviceId}) {
    const accountsCollection = dbo.getAccountsCollection()
    let accounts = await accountsCollection.find({activationKey: activationKey})
    accounts = await accounts.toArray()
    let account = accounts[0]

    if (!account) return {
        success: false,
        message: "올바르지 않거나 만료된 활성화 키 입니다.",
        code: 401
    }

    let deviceIdAlreadyExists = account.loggedInDevices.indexOf(deviceId) > -1
    if (deviceIdAlreadyExists) {
        let updateRes = await accountsCollection.updateOne(
            {activationKey: activationKey},
            {
                $pull: {
                    "loggedInDevices": deviceId
                }
            }
        )
    }

    return {
        success: true,
        message: "성공적으로 로그아웃 했습니다.",
        code: 200
    }
}

module.exports = {
    logout
}