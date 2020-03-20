const test = require('ava')
const getAllServices = require('./index')
const finalHandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

const port = 8761

test('getAllServices()', async t => {
  const server = http
      .createServer((req, res) =>
          serveStatic('./test')(
              req, res, finalHandler(req, res)))
      .listen(port)

  const services = await getAllServices()
  const services2 = await getAllServices(`http://localhost:${port}`)
  console.log(services)
  t.deepEqual(services, services2)

  t.true(services[0].name.includes('a-bootiful-client'))
  t.true(services[0].url.includes('8080'))
  server.close()
})
