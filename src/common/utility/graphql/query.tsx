import { gql } from '@apollo/client';

export const GET_ALL_BLOGS = gql`
query Query {
    blogs {
      blogs {
        _id
        title
        description
        subDescription
        createdAt

      }
    }
  }
`