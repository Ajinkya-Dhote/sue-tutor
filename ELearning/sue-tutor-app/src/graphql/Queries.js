import { gql } from "@apollo/client";

export const GET_USER = gql `
    query getUserByUserName($username: String) {
        userByUsername(username: $username) {
            firstName
                id
                middleName
                lastName
                age
                gender
                type
                grade
                board
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