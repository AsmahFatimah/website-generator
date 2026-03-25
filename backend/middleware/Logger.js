const randomId = Math.random()
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}${randomId}`);
    next()
}

module.exports = logger