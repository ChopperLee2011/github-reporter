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

const token = '81b5bd3c2d5a0492d2d6a4a32fd4f4bf7c65f24a'
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: `https://api.github.com/graphql?access_token=${token}`
  })
})

export default client
