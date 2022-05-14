import * as React from 'react';
import { Box, Card, CardContent, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, Switch, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode, setTheme } from "../../store/features/themeSlice";

export default function AppSettings() {
    const mode = useSelector(state => state.theme.mode);
    const dispatch = useDispatch();
    const onDarkThemeClick = () => {
        dispatch(toggleMode());
    }

    const themes = useSelector(state => state.theme.themes);

    const [language, setLanguage] = React.useState('');

    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value)
    };

    return (
        <Box
            xs={12}
            sx={{
                p: 1,
                height: '100%'
            }}
        >
           
           <Card key='theme'
                variant="outlined"
                sx={{mt: 1}}
           >
                <CardContent>
                    <Typography sx={{ fontWeight: 'bold'  }} color="text.secondary" gutterBottom>
                            Theme
                    </Typography>
                    <Grid container spacing={1}>
                    {themes.map(theme => {
                        return (
                            <Grid item key={theme.name} >
                                <Box  
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            backgroundColor: theme.color,
                                            '&:hover': {
                                            opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                        onClick={() => dispatch(setTheme(theme))}
                                    />
                                </Grid>
                            
                        )
                    })}
                    </Grid>
                   
                   
                </CardContent>
           </Card>
          
           <Card variant="outlined" key='mode'  sx={{mt: 1}}>
                <CardContent>
                    <Typography sx={{ fontWeight: 'bold'  }} color="text.secondary" gutterBottom>
                            Dark Mode
                    </Typography>
                    <FormGroup>
                        <FormControlLabel control={<Switch onClick={onDarkThemeClick}/>} label={mode ==='light' ? 'off' : 'on'} />
                </FormGroup>
                </CardContent>
           </Card>

           <Card variant="outlined" key='language'  sx={{mt: 1}}>
                <CardContent>
                    <Typography sx={{ fontWeight: 'bold'  }} color="text.secondary" gutterBottom>
                            Language
                    </Typography>
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Language</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={language}
                                label="Language"
                                onChange={handleChange}
                                >
                                <MenuItem value={'en'}>English</MenuItem>
                                <MenuItem value={'hi'}>Hindi</MenuItem>
                                <MenuItem value={'mr'}>Marathi</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </CardContent>
           </Card>

        </Box>
    );
}