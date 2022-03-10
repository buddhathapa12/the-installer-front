import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  page: {
    height: "100vh",
    overflow: "scroll",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
  },
  backgroundImage: {
    backgroundImage: "url(/static/images/pipes-against-the-wall.jpg)",
  },
  children: {
    flexGrow: 1,
  },
});

export default useStyles;
