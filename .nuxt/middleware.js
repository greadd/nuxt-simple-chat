const middleware = {}

middleware['chat'] = require('../middleware/chat.js')
middleware['chat'] = middleware['chat'].default || middleware['chat']

middleware['login'] = require('../middleware/login.js')
middleware['login'] = middleware['login'].default || middleware['login']

export default middleware
