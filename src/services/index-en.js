import {gql} from "graphql-request";



// const graphqlAPI = "process.env.REACT_APP_API_KEY ";

export const endpoint = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnew7uke0ci001um687ibibi/master`;

export const query = gql`
query MyQuery {
  echoesConnection {
    edges {
      node {
        id
        locale
        tags
        title
        description
        linkId
        updatedAt
        facade {
          url
          size
        }
        content {
          html
        }
        localizations {
          content {
            html
          }
          title
          description
        }
      }
    }
  }
}
`
