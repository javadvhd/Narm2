// modules
const { get, post } = require('axios')
// helper
const { requestUrl } = require('./helper')

module.exports = router => {
  router.post('/', async ctx => {
    const { dest, action, payload } = ctx.request.body
    // TODO: check
    console.log(requestUrl(dest, action), { payload })
    const { data } = await post(requestUrl(dest, action), { payload })
    ctx.body = data
  })

  router.get('/', async ctx => {
    const { dest, action, payload } = ctx.query
    const res = await get(requestUrl(dest, action), { params: { payload } })
    ctx.body = res
  })
}
