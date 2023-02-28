const Joi = require('joi')

const get = Joi.object({})

const create = Joi.object({
    activationKey: Joi.string().min(4).max(20).required(),
})

const update = Joi.object({})

const remove = Joi.object({})

module.exports = {
    get,
    create,
    update,
    remove
}