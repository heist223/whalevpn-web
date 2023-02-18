const errorHandler = fn =>
  function asyncUtilWrap (req, res, next, ...args) {
    const fnReturn = fn(req, res, next, ...args)
    const handleError = (error) => {
        console.error(error)
        return res.status(500).send("error!")
    }
    return Promise.resolve(fnReturn).catch(err => handleError(err))
}

module.exports = errorHandler