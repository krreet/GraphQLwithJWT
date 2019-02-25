const express = require('express');
const { graphqlExpress } = require('apollo-server-express');
const schema = require('./data/schema');
const SERVER =  require('./data/schema.js');
const app = express()

const PORT =  process.env.PORT || 3000 ;
const path = '/graphql';

const jwt = require('express-jwt')
require('dotenv').config()
// auth middleware
const auth = jwt({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false
  })

  app.use(path ,auth);
// Middleware: GraphQL
SERVER.applyMiddleware({
    app,
    path
  });
// create our express app






// Express: Listener
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});
// Exports

module.exports = app;
// graphql endpoint
    // graphql endpoint
//     app.use('/api', bodyParser.json(), auth, graphqlExpress(req => ({
//         schema,
//         context: {
//           user: req.user
//         }
//       }))
//       )

// app.listen(PORT, () => {
//   console.log(`The server is running on http://localhost:${PORT}/api`)
// })