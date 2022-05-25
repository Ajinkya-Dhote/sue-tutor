import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export function NumberCard(props) {
    const {description, number, backgroundColor='#D0F2FF'} = props;
  return (
    <Card sx={{ minWidth: 100, maxWidth: 150, backgroundColor: backgroundColor, my: 2 }} variant="outlined">
      <CardContent align="center">
       
        <Typography variant="h2" component="div" color="primary">
         {number}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
