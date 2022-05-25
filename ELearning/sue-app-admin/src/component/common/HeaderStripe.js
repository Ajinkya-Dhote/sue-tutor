import { Divider, Paper, Skeleton, Typography, useTheme } from '@mui/material';

export function HeaderStripe(props) {
    const {title, borderColor='#3366FF', backgroundColor='#D6E5FA' } = props;
    return (
        <Paper  sx={{ my: 2, p: 2, borderLeft: `8px solid borderColor`, backgroundColor: backgroundColor }} elevation={2}>
                <Typography variant='h5' gutterBottom>{title}</Typography>
        </Paper>
    )
}