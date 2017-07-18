import graphqlClient from '../services/apollo/client'
import ISSUE from '../services/apollo/graphqls/issue.graphql.js'
import REPO from '../services/apollo/graphqls/repo.graphql'

export default {
  getIssues(){
    return graphqlClient.query(ISSUE)
  },
  getRepos(){
    return graphqlClient.query(REPO)
  }
}