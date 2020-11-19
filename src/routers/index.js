const router = require('koa-router')({ prefix: '/api' })
const boiling = require('./boiling')


router.get('/', async ctx => { ctx.body = 'api index' })

router.use('/boiling', boiling.routes());

module.exports = router