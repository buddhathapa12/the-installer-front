import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  ourServiceCont: {
    padding: "30px 0px 50px 0px",
    maxWidth: "1140px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
  },
  ourServicesTitle: {
    textAlign: "center",
    fontSize: "50px",
    fontWeight: 600,
    marginBottom: "30px",
  },
  ourServiceSubCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "relative",
    marginBottom: "50px",
  },
  ourServiceItemCont: {
    width: "33.33%",
    height: "200px",
    padding: "10px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  serviceIcon: {
    width: "1rem",
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    transform: "scale(3)",
  },
  serviceName: {
    fontWeight: 600,
    fontSize: "1.75rem",
    textAlign: "center",
  },
  serviceDescription: {
    fontSize: "16px",
    textAlign: "center",
  },
});

export default useStyles;
