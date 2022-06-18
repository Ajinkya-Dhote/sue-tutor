import { Divider, Paper, Skeleton, Typography, useTheme } from '@mui/material';

export function HeaderStripe(props) {
    const {title, borderColor='#3366FF', backgroundColor='#D6E5FA' } = props;
    return (
        <Paper  sx={{ mb: 2, p: 2,  backgroundColor: backgroundColor }} elevation={2}>
                <Typography variant='h5' gutterBottom>{title}</Typography>
        </Paper>
    )
}