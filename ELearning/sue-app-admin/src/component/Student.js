import * as React from 'react';
import { ALL_STUDENTS } from '../graphql/StudentQueries';
import {useQuery} from "@apollo/client";
import { Divider, Paper, Skeleton, Typography, useTheme } from '@mui/material';
import { SueTable } from './common/SueTable';
import { NumberCard } from './common/NumberCard';
import { Box } from '@mui/system';
import { HeaderStripe } from './common/HeaderStripe';



export function Student() {
    let rows = [];
    let headers = [];
    const theme = useTheme();

    console.log(theme.palette.primary);

    const { loading, error, data } = useQuery(ALL_STUDENTS);

    if (data == undefined) {
        return (
            <>
                <Skeleton variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={118} />
            </>
            
        );
    } else {
        headers = ['Name', 'Address', 'Phone'];
        rows = [];
        data.users
            .filter(r => r.type === 'STUDENT')
            .map(r => rows.push({'Name': `${r.firstName} ${r.lastName}`, 'Email': r.contact.email, 'Address': r.contact.address, 'Phone': r.contact.mobileNumber}))
    }

  return (
    <>
            <HeaderStripe title='Students' />
            <NumberCard description='Total' number={rows.length}/>
            <SueTable headers={headers} rows={rows} />
        </>
  );
}
