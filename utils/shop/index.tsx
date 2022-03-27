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
  },
}));

export default useStyles;
