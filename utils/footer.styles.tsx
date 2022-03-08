import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footerCont: {
    backgroundColor: "#000000",
    borderStyle: "solid",
    borderWidth: "1px 0px 0px 0px",
    borderColor: "#ffffff",
    padding: "10px 0px 10px 0px",
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
  ContactNumberCont: {
    width: "21.726%",
    display: "flex",
    flexDirection: "row",
    paddingLeft: "5%",
  },
  contactNumberLogo: {
    alignItems: "flex-end",
    transform: "scale(1.5)",
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
  socialHandleCont: {
    width: "16.097%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingRight: "5%",
  },
  socialHandleItemCont: {
    flexGrow: 1,
    textAlign: "center",
    borderRadius: "10%",
    transform: "scale(1.4)",
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
