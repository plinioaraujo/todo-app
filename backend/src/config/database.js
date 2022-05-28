// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise

// module.exports = mongoose.connect('mongodb://localhost:27017/todo', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/todo')
mongoose.Promise = global.Promise
module.exports = mongoose
