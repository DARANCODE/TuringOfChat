const NodeCache = require('node-cache')

const config = {
    prefix: '/',
    openaikey: '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',
    cache: new NodeCache({
        checkperiod: 10000,
        deleteOnExpire: true
    }),
    ratelimit: new Map(),
    commands: new Map(),
    aliases: new Map()
}

module.exports = config