import { gql } from "@apollo/client";

export const GET_USER = gql `
    query getUserByUserName($username: String) {
        userByUsername(username: $username) {
            firstName
                middleName
                lastName
                age
                gender
                type
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