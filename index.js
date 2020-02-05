const axios = require('axios')
const { prop } = require('ramda')
const { parse } = require('node-html-parser')

const defaultPort = process.env.EUREKA_PORT || 8761

const getAllServices = (port = defaultPort) =>
  axios.get(`http://localhost:${port}/`)
    .then(prop('data'))
    .then(html =>
      parse(html)
        .querySelectorAll('a')
        .filter(e =>
          e.rawAttrs.includes('actuator')) // ?
        .map(e => ({
          url: e.rawAttrs.split('href="').pop().split('/actuator').shift(),
          name: e.innerHTML
        })))

module.exports = getAllServices
