import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../../firebase-config";
import { useRouter } from "next/router";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Typography } from "@mui/material";
import useStyles from "../../utils/login/login.styles";
const Login = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const classes = useStyles();
  const SignIn = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const { refreshToken, providerData } = user;
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));

    router.push("/");
    console.log(providerData);
  };

  return (
    <Box className={classes.loginCont}>
      <Typography className={classes.titleCont}>Please login with google before shopping</Typography>{" "}
      <Box
        className={classes.signInWithGoogleCont}
        sx={{
          "&:hover": {
            transform: "scale(1.1)",
            transitionDuration: "500ms",
          },
        }}
        onClick={SignIn}
      >
        <Typography className={classes.signInText}>Sign in with Google</Typography>
        <span className={classes.googleIcon}>
          <GoogleIcon />
        </span>
      </Box>
    </Box>
  );
};

export default Login;
