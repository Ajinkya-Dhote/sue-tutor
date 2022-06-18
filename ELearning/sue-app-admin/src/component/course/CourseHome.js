import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import React from "react";
import { GET_ALL_COURSE } from "../../graphql/CourseQueries";
import api from "../../services/api";
import { HeaderStripe } from "../common/HeaderStripe";
import { SueTable } from "../common/SueTable";
import { useQuery, useLazyQuery } from "@apollo/client";
import { CreateCourse } from "./CreateCourse";
import {TitleBarService} from '../../services/TitleBarService';
import { NumberCard } from "../common/NumberCard";

export function CourseHome() {
    
    let [getCourses, { loading, error, data }] = useLazyQuery(GET_ALL_COURSE, {
        fetchPolicy: 'network-only',
      });

    ({ loading, error, data } = useQuery(GET_ALL_COURSE));

    const headers = ["Name", "Description", "Grade"];

    TitleBarService.setTitle('Courses');

    const handleAddCourseSuccess = () => {
        getCourses();
    }




    let rows = [];
    if (data && data.courses) {
        data.courses
            .map(r => rows.push({ 'Name': r.name, 'Description': r.description, 'Grade': r.grade }))
    }


    return (
        <>
            <NumberCard description='Total' number={rows.length}/>
            <CreateCourse addCourse={handleAddCourseSuccess} />
            {/* */}
            {rows.length > 0 && <SueTable headers={headers} rows={rows} />}

        </>
    )
}