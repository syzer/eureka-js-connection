const test = require('ava')
const getAllServices = require('./index')
const finalHandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

const port = 8761

http
  .createServer((req, res) =>
    serveStatic('./test')(
      req, res, finalHandler(req, res)))
  .listen(port)

test('getAllServices', async t => {
  const services = await getAllServices(8761)
  console.log(services)

  t.true(services[0].name.includes('a-bootiful-client'))
  t.true(services[0].url.includes('8080'))
})
