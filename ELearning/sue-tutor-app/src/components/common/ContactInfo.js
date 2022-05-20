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
import { useTranslation } from "react-i18next";

export default function ContactInfo(props) {
    const { t } = useTranslation();
    const contact = props.data;
    const info = useSelector(state => state.customer.info);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        setEmail(contact.email);
        setPhoneNumber(contact.mobileNumber);
        setLocation(contact.address);
    }, [contact])

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

            <Typography>{t('contact-details')}</Typography>
            <TextField
                id="standard-basic"
                label={t('email')} type="email"
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
            <TextField id="standard-basic" label={t('phone-number')} type="tel" variant="standard" required
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
            <TextField id="standard-basic" label={t('location')} variant="standard" required
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