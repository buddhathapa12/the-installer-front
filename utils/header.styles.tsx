import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#000000",
    height: "auto",
    position: "static",
  },

  logo: {
    width: "11.358%",
  },

  titleNameCont: {
    width: "25.53%",
  },

  titleName: {
    color: "#c5d3db",
    fontFamily: '"Jacques Francois Shadow", Sans-serif',
    fontSize: 35,
    fontWeight: 600,
    fontStyle: "italic",
    textAlign: "left",
  },

  navbarCont: {
    width: "58.963%",
    alignContent: "center",
    alignItems: "center",
    padding: "10px",
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
    fontWeight: 600,
    fontFamily: '"Poppins", Sans-serif',
  },

  cartCont: {
    width: "4.096%",
  },

  cart: {
    backgroundColor: "transparent",
    transform: "scale(1.5)",
    // display: 'inline-block',
  },

  cartIcon: {
    color: "#ffffff",
    fontSize: "30px",
    "&:hover": {
      color: "red",
    },
    "&::before": {},
  },

  hamBurgerCont: {
    backgroundColor: "#000000",
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },

  mobileViewCont: {
    justifyContent: "center",
  },
  hamBurgerMenuItem: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: 500,
    fontFamily: '"Poppins", Sans-serif',
    height: "40px",
    fontSize: "15px",
    paddingTop: "10px",
    "&:hover": {
      backgroundColor: "#ffffff",
      "& a": {
        color: "#000000",
      },
    },
  },
});

export default useStyles;
