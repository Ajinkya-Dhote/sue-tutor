import { gql } from "@apollo/client";

const username = localStorage.getItem('user');
export const GET_USER = gql `
    query {
        userByUsername(username: "${username}") {
            firstName
            middleName
            lastName
            age
            gender
            contact {
              userId,
              email,
              id,
              address,
              mobileNumber
            }
            
          }
    }
`