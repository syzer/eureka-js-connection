# Eureka-js-connection
Example using netflix eureka

# Usage
```js
const getAllServices = require('eureka-js-connection')

getAllServices()
  .then(console.log)
  .catch(console.error)
```

or with port

```js
const getAllServices = require('eureka-js-connection')

getAllServices(8761)
  .then(console.log)
  .catch(console.error)
```
