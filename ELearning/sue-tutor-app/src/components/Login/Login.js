import FaceIcon from '@mui/icons-material/Face';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, Divider, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import api from "../../services/api";
import { useAuth } from "../../services/auth/RequireAuth";
import SueTutorLogo from "../../svg-icon/SueTutorLogo";

function Login() {
  const loginBackGroundColor = blueGrey[50];
  const backgroundColor = "#455a64";

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let auth = useAuth();
  let location = useLocation();
  let navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    api({
      method: "post",
      url: "/app/login",
      data: {
        "username": username,
        "password": password
      }
    }).then(res => {
      auth.signin(username, () => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", username);
        }
        navigate(from, { replace: true });
      })

    }).catch(error => console.log(error))
  }


  const particlesInit = async (main) => {

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }


  return (
    <>


      <Grid
        container
        direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' }}
        justifyContent="space-around"
        alignItems="center"
        // sx={{width: '10%', height: '90%'}}
        sx={{ backgroundColor: backgroundColor, height: '100%' }}
      >

        <Box
          // component="svg"
          xs={6}
          // src={SueTutorLogo}
          alignItems="center"
          sx={{
            height: 233,
            width: 233,
            maxHeight: { xs: 233, md: 250 },
            maxWidth: { xs: 350, md: 250 },
            borderRadius: 5,
            // backgroundColor: loginBackGroundColor,
          }}
        >
          <SueTutorLogo width="233" height="233" />
        </Box>

        <Box
          component="form"
          xs={6}
          sx={{
            mt: 1,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            '& .MuiFormControl-root': { m: 1, },
            '& .MuiButton-root': { m: 1 },
            backgroundColor: blueGrey[50],
            borderRadius: 5,
            // width: '100%'
            // width: {xs : '100%'}
          }}
        >
          <div className="center">
            <FaceIcon fontSize="large" sx={{ color: backgroundColor }} />
          </div>
          <TextField label="Username" value={username} onChange={handleUsernameChange} size="small" sx={{ color: backgroundColor }}></TextField>
          <TextField label="password" value={password} onChange={handlePasswordChange} size="small" variant="outlined" type="password" sx={{ color: backgroundColor }}></TextField>
          <Button variant="outlined" sx={{ color: backgroundColor }} onClick={handleLogin}>Login</Button>
          <Divider>
            <Typography variant="overline">or login with</Typography>
          </Divider>
          <div className="center">
            <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
              <IconButton aria-label="goole-login" sx={{ color: backgroundColor }}>
                <GoogleIcon />
              </IconButton>
              <IconButton aria-label="facebook-login" sx={{ color: backgroundColor }}>
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="whatsapp-login" sx={{ color: backgroundColor }}>
                <WhatsAppIcon />
              </IconButton>
            </Stack>
          </div>

        </Box>
      </Grid>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#0d47a1",
          //   },
          // },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 0.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  )
}

export default Login;