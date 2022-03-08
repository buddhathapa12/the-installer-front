import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  feedbackContainer: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "298px",
  },
  feedbackHeading: {
    color: "white",
    fontSize: "40px",
    fontFamily: "'Poppins', Sans-serif",
    fontWeight: 600,
    height: 70,
    marginBottom: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default useStyles;
