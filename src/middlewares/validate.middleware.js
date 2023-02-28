module.exports = function(schema) {
    return function(req, res, next) {
        const merged = {...req.cookies, ...req.body, ...req.query, ...req.params}
        let valRes = schema.validate(merged, {allowUnknown: true})

        if (!valRes.error) {
            res.locals.merged = valRes?.value
            next()
            return
        }

        let errorDeatil = valRes.error.details[0]

        return res.status(401).json({
            success: false,
            message: errorDeatil.message,
            code: 401
        })
    }
}