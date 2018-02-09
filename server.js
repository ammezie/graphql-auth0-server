'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { graphqlExpress } = require('apollo-server-express')
const schema = require('./data/schema')
const jwt = require('express-jwt')
var jwks = require('jwks-rsa')
require('dotenv').config()

const PORT = 3000

// create our express app
const app = express()

// enable CORS
app.use(cors())

// auth middleware
const auth = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_ISSUER}.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ['RS256'],
  credentialsRequired: false
})

// graphql endpoint
app.use(
  '/api',
  bodyParser.json(),
  auth,
  graphqlExpress(req => ({
    schema,
    context: {
      user: req.user
    }
  }))
)

app.listen(PORT, () => {
  console.log(`The GraphQL server is running on http://localhost:${PORT}/api`)
})
