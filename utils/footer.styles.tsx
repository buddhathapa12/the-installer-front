import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
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
  },
  navbarMobile: {
    position: "relative",
    backgroundColor: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  ContactNumberCont: {
    width: "21.726%",
    display: "inline-flex",
    flexDirection: "row",
    paddingLeft: "5%",
    justifyContent: "end",
  },
  ContactNumberMobileCont: {
    display: "inline-flex",
    flexDirection: "row",
    paddingLeft: "5%",
    justifyContent: "end",
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
  },
  navbarMobileCont: {
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    padding: "10px",
  },

  socialHandleCont: {
    width: "16.097%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px",
  },
  socialHandleMobileCont: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
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
});

export default useStyles;
