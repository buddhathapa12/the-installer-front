import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import useStyles from "./styles";

interface IBannerData {
  title: string;
  description?: string;
  backgroundImageUrl: string;
}

type BackgroundSize = "auto" | "contain" | "cover" | "inherit" | "initial" | "revert" | "unset";

interface IImageBanner {
  height?: string;
  titleFontSize?: string;
  descriptionFontSize?: string;
  applyDarkOverlay?: boolean;
  backgroundSize?: BackgroundSize;
  data: IBannerData;
}

const ImageBanner: NextPage<IImageBanner> = (props) => {
  const styles = useStyles();
  return (
    <Box
      key={props.data.backgroundImageUrl}
      className={`${styles.backgroundImage} ${styles.textWhite}`}
      style={{
        backgroundImage: `url(${props.data.backgroundImageUrl})`,
        height: props.height ?? "500px",
        backgroundSize: props.backgroundSize ?? "cover",
      }}
    >
      {(props.applyDarkOverlay ?? true) && <Box className={styles.overlay} />}
      <Box className={styles.content}>
        <Typography
          className={styles.title}
          style={{ ...(props.titleFontSize ? { fontSize: props.titleFontSize } : {}) }}
        >
          {props.data.title}
        </Typography>
        {props.data.description && (
          <Typography
            className={styles.description}
            style={{ ...(props.descriptionFontSize ? { fontSize: props.descriptionFontSize } : {}) }}
          >
            {props.data.description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ImageBanner;
