import { InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setAcademicQualification, setAcademicYear } from "../../store/features/customerSlice";

export default function AcademicInfo() {
    const { t } = useTranslation();
    const academicQualification = [
        {
            name: 'School',
            value: 'school'
        },
        {
            name: 'Graduation',
            value: 'graduation'
        },
        {
            name: 'Post Graduation',
            value: 'postGraduation'
        },
    ]
    const academicYears = [
        {
            name: '1st Standard',
            value: '1s'
        }, {
            name: '2nd Standard',
            value: '2s'
        }, {
            name: '3rd Standard',
            value: '3s'
        }, {
            name: '4th Standard',
            value: '4s'
        },
    ];

    const dispatch = useDispatch();


    const info = useSelector(state => state.customer.info);
    const [qualification, setQualification] = useState(info.academic.qualification);
    const [year, setYear] = useState(info.academic.year);

    const handleQualificationChange = (event) => {
        setQualification(event.target.value);
        dispatch(setAcademicQualification(event.target.value))
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
        dispatch(setAcademicYear(event.target.value))
    }

    return (
        <Paper
            elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiFormControl-root': { m: 2, width: '35ch' } }}
        >
            <Typography>{t('academic-info')}</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{t('academic-qualification')}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={qualification}
                    label={t('academic-qualification')}
                    onChange={handleQualificationChange}
                >
                    {academicQualification.map((a) => <MenuItem key={a.name} value={a.value}>{a.name}</MenuItem>)}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{t('academic-year')}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={year}
                    label={t('academic-year')}
                    onChange={handleYearChange}
                >
                    {academicYears.map((a) => <MenuItem key={a.name} value={a.value}>{a.name}</MenuItem>)}
                </Select>
            </FormControl>
        </Paper>
    )
}