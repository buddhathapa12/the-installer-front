import { Box } from "@mui/material";
import React from "react";
import ImageBanner from "../../components/ImageBanner";
import ProjectList from "../../components/projects/projectList";
import { ProjectsData } from "../../fixtures/Projects/projectsData";
const Projects = () => {
  return (
    <Box>
      <ImageBanner
        data={{
          title: "Past Projects",
          description: "SOME OF OUR LATEST WORK",
          backgroundImageUrl: "/static/images/projects/plumber.jpg",
        }}
      />
      <Box>
        <ProjectList data={ProjectsData} />
      </Box>
    </Box>
  );
};

export default Projects;
