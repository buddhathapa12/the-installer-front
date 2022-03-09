import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  backgroundImage: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  carousel: {
    width: "100%",
    height: "500px",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: 1,
    margin: "0px",
  },

  description: {
    fontSize: "28px",
    fontWeight: 500,
    lineHeight: 1.4,
    margin: "0px",
    marginBottom: "30px",
  },

  link: {
    cursor: "pointer",
  },

  borderBlack: {
    borderColor: "black",
  },
  borderWhite: {
    borderColor: "white",
  },

  textBlack: {
    color: "black",
  },
  textWhite: {
    color: "white",
  },

  learnMore: {
    width: "152px",
    height: "50px",
    fontSize: "16px",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid",
  },

  indicatorContainer: {
    position: "relative",
    bottom: "35px",
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
  },
}));

export default useStyles;
