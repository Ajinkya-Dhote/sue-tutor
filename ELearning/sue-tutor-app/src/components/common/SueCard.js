import { Box, Chip, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import ScienceIcon from '@mui/icons-material/Science';
import { blue } from '@mui/material/colors';

export default function SueCard() {
    return (
        <Grid item xs={12} sm={12} md={4}>
            <Paper className="sue-card" variant='outlined' sx={{  m: 1, p: 1, flexGrow: 1}} elevation={2}>
                <Typography variant='h6' sx={{ p: 1 }}> Chemistry</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }} s>
                    <ScienceIcon fontSize="large" color="primary" />
                </Box>
                <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between' }}>
                  
                    <Chip label="5 active teachers" variant="outlined" />
                </Box>

            </Paper>
        </Grid>
        // <div> hi</div>

    );
}