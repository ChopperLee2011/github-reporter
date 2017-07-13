import gql from 'graphql-tag'
import graphqlClient from '../services/apollo/client'

// const _issues = [{id: 1, name: 'new issues1'}, {id: 2, name: ' new issue2'}]
export default {
  // getIssues(cb){
  //   setTimeout(() => cb(_issues), 100)
  // }
  getIssues(){
    return graphqlClient.query({query: gql`{
        repository(owner: "ChopperLee2011", name: "test-repo") {
            issues(first: 10) {
                edges {
                    node {
                        id
                        title
                    }
                }
            }
        }
    }`})
  }
}