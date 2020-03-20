# Eureka-js-connection
Example using netflix eureka

# Usage
## With url
```js
const getAllServices = require('eureka-js-connection')

getAllServices('http://localhost:8080')
  .then(console.log)
  .catch(console.error)
```

# Via environment variables
set en variables via cross-env
EUREKA_PORT || 8761
EUREKA_URI || 'http://localhost'
or EUREKA_URL || 'http://localhost:8080'

```js
const getAllServices = require('eureka-js-connection')

getAllServices()
  .then(console.log)
  .catch(console.error)
```

