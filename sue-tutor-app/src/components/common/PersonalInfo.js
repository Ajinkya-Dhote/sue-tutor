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
export default function PersonalInfo() {
    const dispatch = useDispatch();


    const info = useSelector(state => state.customer.info);

    const [name, setName] = useState(info.name);
    const [surName, setSurName] = useState(info.surName);
    const [middleName, setMiddleName] = useState(info.middleName);
    const [age, setAge] = useState(info.age);
    const [gender, setGender] = useState(info.gender);

    useEffect(() => {
        setName(info.name);
        setSurName(info.surName);
        setMiddleName(info.middleName);
        setAge(info.age);
        setGender(info.gender)
    }, [])



    const handleNameChnage = (event) => {
        setName(event.target.value);
        dispatch(setNameInStore(event.target.value))
    }

    const handleMiddleNameChnage = (event) => {
        setMiddleName(event.target.value);
        dispatch(setMiddleNameInStore(event.target.value))
    }

    const handleSurnameChnage = (event) => {
        setSurName(event.target.value);
        dispatch(setSurNameInStore(event.target.value))
    }

    const handleAgeChane = (event) => {
        setAge(event.target.value);
        dispatch(setAgeInStore(event.target.value))
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
        dispatch(setGenderInStore(event.target.value));
    }

    return (
        <Paper
            elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiFormControl-root': { m: 2, width: '35ch' } }}
        >

            <Typography>Personal Information</Typography>
            <TextField id="standard-basic" value={name} label="Name" variant="standard" required onChange={handleNameChnage} />
            <TextField id="standard-basic" value={middleName} label="Middle Name" variant="standard" required onChange={handleMiddleNameChnage} />
            <TextField id="standard-basic" value={surName} label="Surname" variant="standard" required onChange={handleSurnameChnage} />
            <TextField
                id="standard-number"
                label="Age"
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
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={gender}
                    onChange={handleGenderChange}
                >

                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />

                </RadioGroup>
            </FormControl>
        </Paper>
    )
}