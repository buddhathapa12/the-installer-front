import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
const useStyles = makeStyles((theme: Theme) => ({
  footerCont: {
    backgroundColor: "#000000",
    borderStyle: "solid",
    borderWidth: "1px 0px 0px 0px",
    borderColor: "#ffffff",
    padding: "10px 0px 10px 0px",
  },
  footerUpperCont: {
    // paddingLeft: "7%",
    // paddingRight: "7%",
  },
  navbar: {
    position: "relative",
    backgroundColor: "inherit",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginRight: "auto",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  ContactNumberCont: {
    width: "21.726%",
    display: "inline-flex",
    flexDirection: "row",
    paddingLeft: "5%",
    justifyContent: "end",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      justifyContent: "center",
      paddingLeft: "0%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
      paddingLeft: "0%",
    },
  },
  contactNumberLogo: {
    alignItems: "flex-end",
    transform: "scale(1.5)",
    paddingTop: "5px",
    paddingRight: "5px",
  },
  contactNumber: {
    fontSize: "25px",
    fontWeight: 600,
    fontFamily: "Sans-serif",
  },
  navbarCont: {
    width: "61.393%",
    alignContent: "center",
    alignItems: "center",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "row",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "row",
    },
  },

  socialHandleCont: {
    width: "16.097%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      width: "470px",
      flexDirection: "row",
      alignItem: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "607px",
      flexDirection: "row",
      alignItem: "center",
      justifyContent: "center",
    },
  },
  socialHandleItemCont: {
    borderRadius: "10%",
    transform: "scale(1.4)",
    textAlign: "center",
    paddingTop: "5px",
    width: "33px",
    float: "right",
    margin: "5%",
    "&:hover": {
      backgroundColor: "red",
    },
  },

  navbarList: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 0,
    margin: 0,
    listStyleType: "none",
  },

  navbarItemCont: {
    flexGrow: 1,
    textAlign: "center",
    "&:hover": {
      "& a": {
        color: "red",
        // marginLeft: 10,
      },
    },
  },

  navbarItem: {
    fontSize: "20px",
    fontWeight: 500,
    fontFamily: "Poppins",
  },

  footer: {
    textAlign: "center",
    fontWeight: 400,
    fontSize: "15px",
    color: "#ffffff",
    marginTop: 0,
    marginBottom: "0.9rem",
    fontFamily: "Poppins",
  },
}));

export default useStyles;
