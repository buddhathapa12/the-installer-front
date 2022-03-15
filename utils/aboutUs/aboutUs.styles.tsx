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
});

export default useStyles;
