import { Box, Container } from "@mui/material";
import React from "react";
import ImageBanner from "../../components/ImageBanner";
import AboutUsText from "../../components/aboutUs/aboutUsText";
import { aboutUsDetailData } from "../../fixtures/AboutUs/aboutUsDetailData";
import useStyles from "../../utils/aboutUs/aboutUs.styles";
import ExperienceList from "../../components/aboutUs/experienceList";
import { ExperienceData } from "../../fixtures/AboutUs/personalExperienceData";

const About = () => {
  const classes = useStyles();
  return (
    <Box>
      <ImageBanner
        data={{
          title: "About Us",
          backgroundImageUrl: "/static/images/about-us/plumbing-hero-pipes.jpg",
        }}
        titleFontSize="42px"
      />
      <Box className={`${classes.page} ${classes.backgroundImage}`}>
        <Container className={classes.aboutUsCont}>
          <AboutUsText data={aboutUsDetailData} />
        </Container>
        <ExperienceList data={ExperienceData} />
      </Box>
    </Box>
  );
};

export default About;
