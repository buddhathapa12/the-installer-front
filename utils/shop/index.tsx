import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    maxWidth: "960px",
    [theme.breakpoints.down("md")]: {
      margin: "0 20px",
    },
  },
  breadcrumbs: {
    marginTop: "10px",
  },
  sortPageInfoWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10px",
    marginBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  sortingOption: {
    width: "250px",
    height: "40px",
  },
  paginationWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
  },
  paginationArrow: {
    color: "#c36",
  },
}));

export default useStyles;
