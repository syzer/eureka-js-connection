const axios = require('axios')
const { prop } = require('ramda')
const { parse } = require('node-html-parser')

const defaultPort = process.env.EUREKA_PORT || 8761
const defaultEurekaUri = process.env.EUREKA_URI || `http://localhost`
const defaultEurekaUrl = process.env.EUREKA_URL || `${defaultEurekaUri}:${defaultPort}`

const getAllServices = (url = defaultEurekaUrl) =>
  axios.get(url)
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
