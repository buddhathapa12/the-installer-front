import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Carousel from "react-material-ui-carousel";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import useStyles from "./index.styles";

interface IFeedbackData {
  feedback: string;
  author: string;
}

interface IFeedbackCarousel {
  height: string;
  data: IFeedbackData[];
}

const FeedbackCarousel: NextPage<IFeedbackCarousel> = (props) => {
  const styles = useStyles();
  return (
    <Box height={props.height}>
      <Carousel
        className={styles.carousel}
        autoPlay={false}
        navButtonsAlwaysVisible
        indicators={true}
        swipe
        cycleNavigation
        animation="slide"
        IndicatorIcon={<FiberManualRecordIcon style={{ color: "white", width: "12px", height: "12px" }} />}
        indicatorContainerProps={{
          className: styles.indicatorContainer,
        }}
        indicatorIconButtonProps={{
          className: styles.indicatorIconButton,
        }}
        activeIndicatorIconButtonProps={{
          className: styles.activeIndicatorIconButton,
        }}
        navButtonsProps={{
          className: styles.navButtons,
        }}
      >
        {props.data.map((item, index) => {
          return (
            <Box key={index} className={styles.feedbackContainer} height={props.height}>
              <Typography
                className={styles.feedback}
                style={{
                  fontSize: "1.3rem",
                  fontFamily: '"Poppins", Sans-serif',
                }}
                align="center"
              >
                {item.feedback}
              </Typography>
              <Typography
                className={styles.author}
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginTop: "25px",
                  fontFamily: '"Poppins", Sans-serif',
                }}
              >
                {item.author}
              </Typography>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default FeedbackCarousel;
