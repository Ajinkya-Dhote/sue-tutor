import { Box, Typography } from "@mui/material";

export function Banner(props) {
    return (
        <Box
        className="banner"
        sx={{
          flexGrow: 1,
          height: 250,
          backgroundColor: '#97d2fb',
          borderRadius: 5
        }}
      >
          <Typography variant="h3" color="#2a628f" sx={{p: 2}}>{props.title}</Typography>
         
    </Box>
    )
}