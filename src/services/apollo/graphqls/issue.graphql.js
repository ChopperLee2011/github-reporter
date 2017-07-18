import gql from 'graphql-tag'

export default {query: gql`{
    user(login: "ChopperLee2011") {
        issues(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
            edges {
                node {
                    id
                    title
                    updatedAt
                    assignees (first: 10, ){
                        edges {
                            node {
                                id
                                name
                            }
                        }
                    }
                }
            }
        }
    }
}`}
