import { Box } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import useStyles from "./imageCarousel.styles";

interface IBannerData {
  title: string;
  description: string;
  backgroundImageUrl: string;
}

interface IImageCarousel {
  height: string;
  data: IBannerData[];
}

const ImageCarousel: NextPage<IImageCarousel> = (props) => {
  const styles = useStyles();
  return (
    <Carousel
      className={styles.carousel}
      autoPlay
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
          <Box
            key={`${item.backgroundImageUrl}-${index}`}
            className={`${styles.backgroundImage} ${index === 0 ? styles.textWhite : styles.textBlack}`}
            style={{
              backgroundImage: `url(${item.backgroundImageUrl})`,
              height: props.height,
            }}
          >
            <Box className={styles.content}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.description}>{item.description}</p>
              <Box
                className={`${styles.link} ${styles.learnMore} ${
                  index === 0 ? styles.borderWhite : styles.borderBlack
                }`}
              >
                <Link href="/bookOnline">Learn More</Link>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
