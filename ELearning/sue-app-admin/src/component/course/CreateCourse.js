import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import api from "../../services/api";
import { useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_ALL_COURSE } from "../../graphql/CourseQueries";

export function CreateCourse(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [age, setAge] = useState('');


    let [getCourses, { loading, error, data }] = useLazyQuery(GET_ALL_COURSE, {
        fetchPolicy: 'network-only',
    });
    ({ loading, error, data } = useLazyQuery(GET_ALL_COURSE));
    const headers = ["Name", "Description", "Grade"]

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const createNewCourse = () => {
        api({
            method: "post",
            url: "/app/course/",
            data: {
                "name": name,
                "description": description,
                "grade": "FIRST_GRADE"
            }
        }).then(res => {
            props.addCourse();
        }).catch(error => console.log(error))
    }


    return (
        <Accordion sx={{mb: 2}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Create New Course</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ '& > :not(style)': { m: 1 }, }}>
                <TextField id="standard-basic" label="Course Name" variant="standard" value={name} onChange={handleNameChange} fullWidth />
                <TextField id="standard-basic" label="Course Description" variant="standard" value={description} onChange={handleDescriptionChange} fullWidth />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Grade</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Grade"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={() => createNewCourse()}>Add</Button>


            </AccordionDetails>
        </Accordion>
    )
}