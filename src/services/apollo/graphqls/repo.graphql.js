import gql from 'graphql-tag'

export default {query: gql`{
    repositoryOwner(login: "ChopperLee2011") {
        id
        repositories(first: 10, orderBy: {field: PUSHED_AT, direction: DESC}) {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
}`}
