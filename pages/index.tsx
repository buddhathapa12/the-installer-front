import type { NextPage } from "next";
import ImageCarousel from "../components/ImageCarousel";
import { Box, Typography } from "@material-ui/core";
import { bannerData } from "../fixtures/HomePage/bannerData";
import FeedbackCarousel from "../components/Feedback";
import { feedbackData } from "../fixtures/HomePage/feedbacks";

const Home: NextPage = () => {
  return (
    <Box>
      <ImageCarousel height="500px" data={bannerData} />
      <Box
        width={1}
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "298px",
        }}
        padding="10px"
      >
        <Box
          width={1}
          style={{
            maxWidth: "1140px",
          }}
        >
          <Typography
            component="h2"
            align="center"
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "'Poppins', Sans-serif",
              fontWeight: 600,
              height: 70,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            Feedback
          </Typography>
          <FeedbackCarousel height="188px" data={feedbackData} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
