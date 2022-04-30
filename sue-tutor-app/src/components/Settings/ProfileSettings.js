import * as React from 'react';
import { Box, Paper, TextField, Typography } from "@mui/material";
import './Settings.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { grey } from '@mui/material/colors';

export default function ProfileSetttings() {
    return (
        <Box
            sx={{
                p: 1,
                height: '100%',
                bgcolor: grey[100],
                mt: 2,
                borderRadius: 5,
                pt: 2
                
            }}
            
        >
            <Paper  elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiTextField-root': { m: 2, width: '15ch' }, '& .MuiFormControl-root': {m: 2}}}>
                <Typography>Personal Info</Typography>
                <TextField id="standard-basic" label="Name" variant="standard" required/>
                <TextField id="standard-basic" label="Surname" variant="standard" required/>
                <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        
      </RadioGroup>
    </FormControl>
            </Paper>

            <Paper  elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiTextField-root': { m: 2, width: '15ch' }}}>
                <Typography>Personal Info</Typography>
                <TextField id="standard-basic" label="Name" variant="standard" required/>
                <TextField id="standard-basic" label="Surname" variant="standard" required/>
            </Paper>

            <Paper  elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiTextField-root': { m: 2, width: '15ch' }}}>
                <Typography>Personal Info</Typography>
                <TextField id="standard-basic" label="Name" variant="standard" required/>
                <TextField id="standard-basic" label="Surname" variant="standard" required/>
            </Paper>


            <Paper  elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiTextField-root': { m: 2, width: '15ch' }}}>
                <Typography>Personal Info</Typography>
                <TextField id="standard-basic" label="Name" variant="standard" required/>
                <TextField id="standard-basic" label="Surname" variant="standard" required/>
            </Paper>


            <Paper  elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiTextField-root': { m: 2, width: '15ch' }}}>
                <Typography>Personal Info</Typography>
                <TextField id="standard-basic" label="Name" variant="standard" required/>
                <TextField id="standard-basic" label="Surname" variant="standard" required/>
            </Paper>

            <Paper  elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiTextField-root': { m: 2, width: '15ch' }}}>
                <Typography>Personal Info</Typography>
                <TextField id="standard-basic" label="Name" variant="standard" required/>
                <TextField id="standard-basic" label="Surname" variant="standard" required/>
            </Paper>

            <Paper  elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiTextField-root': { m: 2, width: '15ch' }}}>
                <Typography>Personal Info</Typography>
                <TextField id="standard-basic" label="Name" variant="standard" required/>
                <TextField id="standard-basic" label="Surname" variant="standard" required/>
            </Paper>
        </Box>
    )
}