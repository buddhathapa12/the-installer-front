import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  carousel: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },

  feedbackContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: "40px",
    paddingTop: "20px",
  },

  feedback: {
    fontWeight: 400,
    color: "white",
    fontStyle: "italic",
    fontFamily: '"Poppins", Sans-serif',
    fontSize: "20.8px",
    lineHeight: 1.5,
    margin: "0px",
  },

  author: {
    color: "white",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: 1.5,
    fontStyle: "normal",
    fontFamily: '"Poppins", Sans-serif',
    margin: "0px",
    marginTop: "25px",
  },

  link: {
    cursor: "pointer",
  },

  indicatorContainer: {
    position: "absolute",
    bottom: "0px",
  },
  indicatorIconButton: {
    margin: "0px 4px",
    zIndex: 1,
    opacity: 0.5,
  },
  activeIndicatorIconButton: {
    opacity: 1,
  },
  navButtons: {
    backgroundColor: "transparent",
    transform: "scale3d(1.5,1.5,1.5)",
  },
});

export default useStyles;
