import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GET_USER } from "../../graphql/Queries";
import Contact from "../../models/Contact";
import User from "../../models/User";
import AcademicInfo from '../common/AcademicInfo';
import ContactInfo from '../common/ContactInfo';
import PersonalInfo from '../common/PersonalInfo';
import PreferedSubject from '../common/PreferedSubject';

export default function ProfileSetttings() {
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(GET_USER, {
        variables: {
            username: localStorage.getItem("user")
        }
    });
    let user;
    let contact;
    if (data && data.userByUsername) {
        const {firstName, middleName, lastName, mobileNumber, age, gender} = data.userByUsername;    
        user = new User();
        user.build({firstName, middleName, lastName, mobileNumber, age, gender});
        if (data.userByUsername.contact) {
            const  {address, email, mobileNumber} = data.userByUsername.contact;
            contact = new Contact();
            contact.build({address, email, mobileNumber})
        }
    }
    

    if (user) {
        return (
            <Box
                sx={{
                    p: 1,
                    // height: '100%',
                    // bgcolor: grey[100],
                    mt: 2,
                    borderRadius: 5,
                    pt: 2
                    
               }}
                
            >
                <PersonalInfo data={user}/>
                <ContactInfo data={contact}/>
                <AcademicInfo />
                <PreferedSubject />
                <Box sx={{
                    height: "40px"
                }}></Box>
            </Box>
        )
    }
    
}