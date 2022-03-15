import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { IExperience } from "../../fixtures/AboutUs/personalExperienceData";
import useStyles from "./experience.styles";
import PersonalExperiecne from "./personalExperiecne";

interface IExperienceData {
  data: IExperience[];
}
const ExperienceList: NextPage<IExperienceData> = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.experienceList}>
        {props.data.map((experience, index) => {
          return <PersonalExperiecne {...experience} key={index} />;
        })}
      </Box>
    </Container>
  );
};

export default ExperienceList;
