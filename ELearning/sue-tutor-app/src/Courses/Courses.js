import { useQuery } from "@apollo/client";
import { Skeleton } from "@mui/material";
import { GET_ALL_COURSE } from "../graphql/CourseQueries";

export default function Courses() {
    const { loading, error, data, refetch } = useQuery(GET_ALL_COURSE)
    if (loading) return (
        <>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
        </>
        
    )
    const courses = [...data.courses];
    console.log(courses);
    return (
        <>
            {courses.map(course => {
                return <span> {course.name} </span>
            })}
        </>
        
        // <span>c</span>
    )
}