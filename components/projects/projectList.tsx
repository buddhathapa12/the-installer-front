import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { IProject } from "../../fixtures/Projects/projectsData";
import ProjectItem from "./projectItem";

interface IProjectData {
  data: IProject[];
}
const ProjectList: NextPage<IProjectData> = (props) => {
  return (
    <Container>
      <Box>
        {props.data.map((project, index) => {
          return <ProjectItem {...project} key={index} />;
        })}
      </Box>
    </Container>
  );
};

export default ProjectList;
