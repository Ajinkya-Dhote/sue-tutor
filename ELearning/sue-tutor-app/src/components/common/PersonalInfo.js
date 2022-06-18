import { Paper, TextField, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {
    setName as setNameInStore,
    setMiddleName as setMiddleNameInStore,
    setSurName as setSurNameInStore,
    setAge as setAgeInStore,
    setGender as setGenderInStore
} from "../../store/features/customerSlice";
import { useTranslation } from "react-i18next";
export default function PersonalInfo(props) {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const user = props.data;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('FEMALE');


    useEffect(() => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setMiddleName(user.middleName);
        setAge(user.age);
        setGender(user.gender)
    }, [user])



    const handleNameChnage = (event) => {
        setFirstName(event.target.value);
        user.firstName = event.target.value;
        props.onChange(user.toJson());
    }

    const handleMiddleNameChnage = (event) => {
        setMiddleName(event.target.value);
        user.middleName = event.target.value;
        props.onChange(user.toJson());
    }

    const handleSurnameChnage = (event) => {
        setLastName(event.target.value);
        user.lastName = event.target.value;
        props.onChange(user.toJson());
    }

    const handleAgeChane = (event) => {
        setAge(event.target.value);
        user.age = event.target.value;
        props.onChange(user.toJson());
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
        user.gender = event.target.value;
        props.onChange(user.toJson());
    }

    return (
        <Paper
            elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiFormControl-root': { m: 2, width: '35ch' } }}
        >

            <Typography>{t('personal-info')}</Typography>
            <TextField id="standard-basic" value={firstName} label={t('name')} variant="standard" required onChange={handleNameChnage} />
            <TextField id="standard-basic" value={middleName} label={t('middleName')} variant="standard" required onChange={handleMiddleNameChnage} />
            <TextField id="standard-basic" value={lastName} label={t('surname')} variant="standard" required onChange={handleSurnameChnage} />
            <TextField
                id="standard-number"
                label={t('age')}
                value={age}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
                required
                onChange={handleAgeChane}
            />

            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">{t('gender')}</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={gender}
                    onChange={handleGenderChange}
                >

                    <FormControlLabel value="FEMALE" control={<Radio />} label={t('female')} />
                    <FormControlLabel value="MALE" control={<Radio />} label={t('male')} />

                </RadioGroup>
            </FormControl>
        </Paper>
    )
}