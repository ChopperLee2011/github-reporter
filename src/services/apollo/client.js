import ApolloClient, { createNetworkInterface } from 'apollo-client'
// import gql from 'graphql-tag'
import fetch from 'node-fetch'

global.fetch = fetch

// const networkInterface = createNetworkInterface({
//   uri: 'https://api.github.com/graphql'
// })

// networkInterface.use([{
//   applyMiddleware(req, next) {
//     if (!req.options.headers) {
//       req.options.headers = {}
//     }
//     req.options.headers.authorization = `Bearer ${TOKEN}`
//   }
// }])
// const client = new ApolloClient({
//   networkInterface
// })

const token = ''
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: `https://api.github.com/graphql?access_token=${token}`
  })
})

export default client
