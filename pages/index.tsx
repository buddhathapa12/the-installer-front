import type { NextPage } from "next";
import ImageCarousel from "../components/ImageCarousel";
import { Box } from "@material-ui/core";
import { bannerData } from "../fixtures/HomePage/bannerData";

const Home: NextPage = () => {
  return (
    <Box>
      <ImageCarousel height="500px" data={bannerData} />
    </Box>
  );
};

export default Home;
