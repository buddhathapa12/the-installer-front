import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  page: {
    // height: "100vh",
    // overflow: "scroll",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
  },
  backgroundImage: {
    backgroundImage: "url(/static/images/about-us/aboutUsBackground.png)",
  },
  children: {
    flexGrow: 1,
  },
  aboutUsCont: {
    padding: "30px 0px 50px 0px",
    alignItems: "center",
    // marginLeft: "auto",
    // marginRight: "auto",
    color: "white",
  },
});

export default useStyles;
