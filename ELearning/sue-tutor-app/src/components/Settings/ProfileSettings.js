import { useQuery } from "@apollo/client";
import { Box, Fab } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GET_USER } from "../../graphql/Queries";
import Contact from "../../models/Contact";
import User from "../../models/User";
import AcademicInfo from '../common/AcademicInfo';
import ContactInfo from '../common/ContactInfo';
import PersonalInfo from '../common/PersonalInfo';
import PreferedSubject from '../common/PreferedSubject';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import api from "../../services/api";

export default function ProfileSetttings() {
    const dispatch = useDispatch();
    const { loading, error, data, refetch } = useQuery(GET_USER, {
        variables: {
            username: localStorage.getItem("user")
        }
    });
    let user;
    let updatedUser = new User();
    let contact;
    if (data && data.userByUsername) {
        console.log(data);
        const {id ='', firstName = '', middleName = '', lastName = '', mobileNumber = '', age = '', gender = '', grade = '', board = ''} = data.userByUsername;    
        user = new User();
        user.build({id, firstName, middleName, lastName, mobileNumber, age, gender, grade, board});
        if (data.userByUsername.contact) {
            const  {address, email, mobileNumber} = data.userByUsername.contact;
            contact = new Contact();
            contact.build({address, email, mobileNumber})
        }
    }

    const updateUserData = (data) => {
        updatedUser = {...data, ...user.toJson()};
    }
    
    const updateContactData = (data) => {
        updatedUser = {...data, ...user.toJson()}
    }

    const handelUpdate = () => {
        api({
            method: "put",
            url: "/app/user/",
            data: {...data, ...user.toJson()}
        }).then(res => {
            console.log("user updated");
            refetch({username: localStorage.getItem("user")});
        }).catch(error => console.log(error))
    }

    if (user) {
        return (
            <Box
                sx={{
                    p: 1,
                    mt: 2,
                    borderRadius: 5,
                    pt: 2
                    
               }}
                
            >
                <PersonalInfo data={user} onChange={updateUserData}/>
                <ContactInfo data={contact} onChange={updateContactData}/>
                <AcademicInfo data={user} onChange={updateUserData}/>
                <PreferedSubject />
                <Box sx={{flexGrow: 1, display: "flex", justifyContent: "flex-end", p:2, my: 2}}>
                    <Button variant="contained" onClick={handelUpdate}>Update</Button>
                </Box>
                
                <Box sx={{
                    height: "40px"
                }}></Box>
            </Box>
        )
    }
    
}