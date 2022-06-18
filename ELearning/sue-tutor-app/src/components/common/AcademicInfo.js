import { InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export default function AcademicInfo(props) {
    const { t } = useTranslation();
    const academicQualification = [
        {
            name: 'CBSE',
            value: 'CBSE'
        },
        {
            name: 'ISCE',
            value: 'ICSE'
        },
        {
            name: 'Maharashtra Board',
            value: 'MAHARASHTRA_BOARD'
        },
    ]
    const academicYears = [
        {
            name: '1st Grade',
            value: 'FIRST_GRADE'
        }, {
            name: '2nd Grade',
            value: 'SECOND_GRADE'
        }, {
            name: '3rd Grade',
            value: 'THIRD_GRADE'
        }, {
            name: '4th Grade',
            value: 'FOURTH_GRADE'
        }, {
            name: '5th Grade',
            value: 'FIFTH_GRADE'
        }, {
            name: '6th Grade',
            value: 'SIXTH_GRADE'
        }, {
            name: '7th Grade',
            value: 'SEVENTH_GRADE'
        }, {
            name: '8th Grade',
            value: 'EIGHT_GRADE'
        }, {
            name: '9th Grade',
            value: 'NINTH_GRADE'
        }, {
            name: '10th Grade',
            value: 'TENTH_GRADE'
        }
    ];

    const dispatch = useDispatch();


    const user = props.data;
    const [board, setEducationalBoard] = useState('');
    const [year, setGrade] = useState('');
    useEffect(() => {
        setEducationalBoard(user.board);
        setGrade(user.grade)
    }, [user])

    const handleEducationalBoardChange = (event) => {
        setEducationalBoard(event.target.value);
        user.board = event.target.value;
        props.onChange(user.toJson());
    }

    const handleGradeChange = (event) => {
        setGrade(event.target.value);
       user.grade = event.target.value;
       props.onChange(user.toJson());
    }

    return (
        <Paper
            elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiFormControl-root': { m: 2, width: '35ch' } }}
        >
            <Typography>{t('academic-info')}</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{t('education-board')}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={board}
                    label={t('education-board')}
                    onChange={handleEducationalBoardChange}
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
                    onChange={handleGradeChange}
                >
                    {academicYears.map((a) => <MenuItem key={a.name} value={a.value}>{a.name}</MenuItem>)}
                </Select>
            </FormControl>
        </Paper>
    )
}