const router = require('koa-router')()

const axios = require('axios')
const querystring = require('querystring')

router.get('/example', async ctx => {
    const list = [
        {
            id: "1",
            title: "react 中文网站",
            url: "https://react.docschina.org/"
        },
        {
            id: "2",
            title: "Stack OverFlow",
            url: "https://stackoverflow.com/"
        },
        {
            id: "3",
            title: "必应",
            url: "https://cn.bing.com/?ensearch=1"
        },
    ];
    ctx.body = {data: list}
})


module.exports = router