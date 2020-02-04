const test = require('ava')
const getAllServices = require('./')

test('getAllServices', async t => {
  const services = await getAllServices(8761)
  console.log(services)

  t.true(services[0].name.includes('a-bootiful-client'))
  t.true(services[0].url.includes('8080'))
})
