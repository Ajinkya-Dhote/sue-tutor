import { gql } from "@apollo/client";


export const GET_ALL_COURSE = gql `
query getAllCourse {
    courses {
      id
      name
      description
      grade
    }
  }
  
`