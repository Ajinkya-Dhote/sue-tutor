import { IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setEmail as setEmailInStore,
    setPhoneNumber as setPhoneNumberInStore,
    setLocation as setLocationInStore
} from "../../store/features/customerSlice";
export default function ContactInfo() {

    const info = useSelector(state => state.customer.info);
    const [email, setEmail] = useState(info.contact.email);
    const [phoneNumber, setPhoneNumber] = useState(info.contact.phoneNumber);
    const [location, setLocation] = useState(info.contact.location);

    useEffect(() => {
        setEmail(info.contact.email);
        setPhoneNumber(info.contact.phoneNumber);
        setLocation(info.contact.location);
    }, [])

    const dispatch = useDispatch();
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        dispatch(setEmailInStore(event.target.value))
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
        dispatch(setPhoneNumberInStore(event.target.value))
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
        dispatch(setLocationInStore(event.target.value))
    }

    return (
        <Paper
            elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiFormControl-root': { m: 2, width: '35ch' } }}
        >

            <Typography>Contact Details</Typography>
            <TextField
                id="standard-basic"
                label="Email" type="email"
                variant="standard"
                value={email}
                onChange={handleEmailChange}
                required
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon color="primary" />
                        </InputAdornment>
                    )
                }}

            />
            <TextField id="standard-basic" label="Phone Number" type="tel" variant="standard" required
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PhoneIcon color="primary" />
                        </InputAdornment>
                    )
                }}
            />
            <TextField id="standard-basic" label="Location" variant="standard" required
                value={location}
                onChange={handleLocationChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                                <MyLocationIcon color="primary" />
                            </IconButton>

                        </InputAdornment>
                    )
                }}
            />

        </Paper>
    )
}