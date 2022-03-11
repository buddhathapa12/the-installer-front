import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import DiningOutlinedIcon from "@mui/icons-material/DiningOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import BlenderOutlinedIcon from "@mui/icons-material/BlenderOutlined";
import useStyles from "./ourServices.styles";
// interface IOurServiceDetail {
//   data: IOurServiceDetailData[];
// }

const OurServices = () => {
  const classes = useStyles();

  const [mobileView, setmobileView] = useState(false);
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth <= 766 ? setmobileView(true) : setmobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <Box className={classes.ourServiceCont}>
      <Typography className={classes.ourServicesTitle}>Our Services</Typography>
      <div className={mobileView ? classes.ourServiceMobileSubCont : classes.ourServiceSubCont}>
        <Box className={mobileView ? classes.ourServiceMobileItemCont : classes.ourServiceItemCont}>
          <div className={classes.serviceIcon}>
            <LightbulbOutlinedIcon />
          </div>
          <Typography className={classes.serviceName}>Changing door knobs or locks.</Typography>
          <Typography className={classes.serviceDescription}>changing door knobs or locks from $80.</Typography>
        </Box>
        <Box className={mobileView ? classes.ourServiceMobileItemCont : classes.ourServiceItemCont}>
          <div className={classes.serviceIcon}>
            <EngineeringOutlinedIcon />
          </div>
          <Typography className={classes.serviceName}>Vanity Install.</Typography>
          <Typography className={classes.serviceDescription}>Vanity Installs from $180.</Typography>
        </Box>
        <Box className={mobileView ? classes.ourServiceMobileItemCont : classes.ourServiceItemCont}>
          <div className={classes.serviceIcon}>
            <HotelOutlinedIcon />
          </div>
          <Typography className={classes.serviceName}>Furniture Assembly.</Typography>
          <Typography className={classes.serviceDescription}>Furniture Assembly from $100.</Typography>
        </Box>
      </div>
      <div className={mobileView ? classes.ourServiceMobileSubCont : classes.ourServiceSubCont}>
        <Box className={mobileView ? classes.ourServiceMobileItemCont : classes.ourServiceItemCont}>
          <div className={classes.serviceIcon}>
            <LocalLaundryServiceIcon />
          </div>
          <Typography className={classes.serviceName}>Washer and Dryer Installs.</Typography>
          <Typography className={classes.serviceDescription}>Washer and Dryer Installs from $60.</Typography>
        </Box>
        <Box className={mobileView ? classes.ourServiceMobileItemCont : classes.ourServiceItemCont}>
          <div className={classes.serviceIcon}>
            <DiningOutlinedIcon />
          </div>
          <Typography className={classes.serviceName}>Sink Install.</Typography>
          <Typography className={classes.serviceDescription}>Sink Installs with faucet from $150.</Typography>
        </Box>
        <Box className={mobileView ? classes.ourServiceMobileItemCont : classes.ourServiceItemCont}>
          <div className={classes.serviceIcon}>
            <TvOutlinedIcon />
          </div>
          <Typography className={classes.serviceName}>TV Wall Mounting.</Typography>
          <Typography className={classes.serviceDescription}>TV Wall Mounting from $120.</Typography>
        </Box>
      </div>
      <div className={mobileView ? classes.ourServiceMobileSubCont : classes.ourServiceSubCont}>
        <Box className={mobileView ? classes.ourServiceMobileItemCont : classes.ourServiceItemCont}>
          <div className={classes.serviceIcon}>
            <DirectionsRunOutlinedIcon />
          </div>
          <Typography className={classes.serviceName}>Exercise Equipment Assembly.</Typography>
          <Typography className={classes.serviceDescription}>Exercise Equipment Assembly from $100.</Typography>
        </Box>
        <Box className={mobileView ? classes.ourServiceMobileItemCont : classes.ourServiceItemCont}>
          <div className={classes.serviceIcon}>
            <KitchenOutlinedIcon />
          </div>
          <Typography className={classes.serviceName}>Fridge Waterline Install.</Typography>
          <Typography className={classes.serviceDescription}>Fridge Waterline Installs from $100.</Typography>
        </Box>
        <Box className={mobileView ? classes.ourServiceMobileItemCont : classes.ourServiceItemCont}>
          <div className={classes.serviceIcon}>
            <BlenderOutlinedIcon />
          </div>
          <Typography className={classes.serviceName}>Over the Range Microwave Install.</Typography>
          <Typography className={classes.serviceDescription}>Temporary Shelter Installs starting from $250.</Typography>
        </Box>
      </div>
    </Box>
  );
};

export default OurServices;
