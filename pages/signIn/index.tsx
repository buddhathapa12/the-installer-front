import React from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import useStyles from "../../utils/login/login.styles";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
  //Authentication
  const { data: session } = useSession();
  const router = useRouter();

  const classes = useStyles();

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
        onClick={() => {
          signIn("google");
        }}
      >
        <Image src="/static/images/login/signInButton.png" alt="Sign in with Google" width={250} height={55} />
      </Box>
    </Box>
  );
};

export default Login;
