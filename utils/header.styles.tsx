import { makeStyles } from "@material-ui/core";

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
    fontFamily: "Sans-serif",
    "&:hover": {
      backgroundColor: "#ffffff",
      "& a": {
        color: "#000000",
      },
    },
  },
});

export default useStyles;

//  hamBurgerCont: {
//     justifyContent: "center",
//   },
//   hamBurgerMenu: {
//     width: "30px",
//     height: "3px",
//     background: "#fff",
//     borderRadius: "5px",
//     boxShadow: "0 2px 5px rgb(255, 101, 47, .2)",
//     transition: "all 0.5s ease-in-out",
//     "&::before": {
//       content: "''",
//       position: "absolute",
//       width: "30px",
//       height: "3px",
//       background: "#fff",
//       borderRadius: "5px",
//       boxShadow: "0 2px 5px rgb(255, 101, 47, .2)",
//       transition: "all 0.5s ease-in-out",
//       transform: "translateY(-10px)",
//     },
//     "&::after": {
//       content: "''",
//       position: "absolute",
//       width: "30px",
//       height: "3px",
//       background: "#fff",
//       borderRadius: "5px",
//       boxShadow: "0 2px 5px rgb(255, 101, 47, .2)",
//       transition: "all 0.5s ease-in-out",
//       transform: "translateY(10px)",
//     },
//   },

//   activeHamburgerMenu: {
//     width: "30px",
//     height: "3px",
//     background: "transparent",
//     borderRadius: "5px",
//     transform: "translateX(-50px)",
//     boxShadow: "0 2px 5px rgb(255, 101, 47, .2)",
//     transition: "all 0.5s ease-in-out",
//     "&::before": {
//       content: "''",
//       position: "absolute",
//       width: "30px",
//       height: "3px",
//       background: "#fff",
//       borderRadius: "5px",
//       transition: "all 0.5s ease-in-out",
//       transform: "rotate(45deg) translate(35px, -35px)",
//     },
//     "&::after": {
//       content: "''",
//       position: "absolute",
//       width: "30px",
//       height: "3px",
//       background: "#fff",
//       borderRadius: "5px",
//       boxShadow: "0 2px 5px rgb(255, 101, 47, .2)",
//       transition: "all 0.5s ease-in-out",
//       transform: "rotate(-45deg) translate(35px, 35px)",
//     },
//   },
