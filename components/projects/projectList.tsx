import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { IProject } from "../../fixtures/Projects/projectsData";
import ProjectItem from "./projectItem";
import useStyles from "./projects.styles";

interface IProjectData {
  data: IProject[];
}
const ProjectList: NextPage<IProjectData> = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.projectListCont}>
        {props.data.map((project, index) => {
          return <ProjectItem {...project} key={index} />;
        })}
      </Box>
    </Container>
  );
};

export default ProjectList;
