const router = require('express').Router()

router.use('/api', require('./itemRoutes'))
router.use('/', require('./htmlRoutes'))

module.exports = router