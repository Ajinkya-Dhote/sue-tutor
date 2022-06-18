import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export function NumberCard(props) {
    const {description, number, backgroundColor='#97d2fb'} = props;
  return (
    <Card sx={{ minWidth: {xs: 100, sm: 150}, maxWidth: {xs: 100, sm: 150}, backgroundColor: backgroundColor, m: 2 }} variant="outlined">
      <CardContent align="center">
       
        <Typography variant="h3" component="div" color="primary">
         {number}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
