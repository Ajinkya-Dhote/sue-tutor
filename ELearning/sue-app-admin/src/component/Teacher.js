import * as React from 'react';
import { ALL_USERS } from '../graphql/StudentQueries';
import {useQuery} from "@apollo/client";
import { Skeleton, Typography } from '@mui/material';
import { SueTable } from './common/SueTable';
import { HeaderStripe } from './common/HeaderStripe';
import { NumberCard } from './common/NumberCard';
import { TitleBarService } from '../services/TitleBarService';

export function Teacher() {
    let rows = [];
    let headers = [];
    const { loading, error, data } = useQuery(ALL_USERS);
    TitleBarService.setTitle('Teachers');
    if (data == undefined) {
        return (
            <>
                <Skeleton variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={118} />
            </>
            
        );
    } else {
        headers = ['Name', 'Email', 'Address', 'Phone'];
        rows = [];
        data.users
            .filter(r => r.type === 'TEACHER')
            .map(r => rows.push({'Name': `${r.firstName} ${r.lastName}`, 'Email': r.contact.email, 'Address': r.contact.address, 'Phone': r.contact.mobileNumber}))
    }

  return (
    <>
            <NumberCard description='Total' number={rows.length}/>
            <SueTable headers={headers} rows={rows} />
        </>
  );
}