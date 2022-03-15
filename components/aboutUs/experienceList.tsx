import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { IExperience } from "../../fixtures/AboutUs/personalExperienceData";
import PersonalExperiecne from "./personalExperiecne";

interface IExperienceData {
  data: IExperience[];
}
const ExperienceList: NextPage<IExperienceData> = (props) => {
  return (
    <Container>
      <Box>
        {props.data.map((experience, index) => {
          return <PersonalExperiecne {...experience} key={index} />;
        })}
      </Box>
    </Container>
  );
};

export default ExperienceList;
