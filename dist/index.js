
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./styled-system.cjs.production.min.js')
} else {
  module.exports = require('./styled-system.cjs.development.js')
}
