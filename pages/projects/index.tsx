import { Box } from "@mui/material";
import React from "react";
import ImageBanner from "../../components/ImageBanner";

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
      <Box>Hello WOrld</Box>
    </Box>
  );
};

export default Projects;
