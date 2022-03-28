import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  formWrapper: {
    width: "43%",
    height: 375,
    backgroundColor: "#2E2E2E",
    padding: 50,
    [theme.breakpoints.down("md")]: {
      height: 500,
      width: "100%",
    },
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  inputComponentsWrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contactInfoWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  label: {
    fontSize: 18,
    color: "white",
  },

  // Customize Material UI input components
  contactInfoInput: {
    padding: "8px 16px",
    fontSize: 12,
    color: "white",
  },
  messageInput: {
    padding: "5px 14px",
    fontSize: 12,
    color: "white",
  },
  paddingZero: {
    padding: 0,
    ":hover": {
      border: "1px solid white",
    },
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "white !important",
    },
  },
  contactInfoInputHeight: {
    height: 40,
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
  },
  cssFocused: {},
  error: {
    color: "#d9534f",
    fontWeight: 400,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export default useStyles;
