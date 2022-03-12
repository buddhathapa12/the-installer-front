import useStyles from "./styles";

const GoogleMaps = () => {
  const classes = useStyles();
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11335.222810679537!2d-79.81769650257638!3d44.743980633227146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2ac4f11679c529%3A0x1d27c743fabc8c8f!2s518%20Talbot%20St%2C%20Port%20McNicoll%2C%20ON%20L0K%201R0%2C%20Canada!5e0!3m2!1sen!2sus!4v1647071287197!5m2!1sen!2sus"
      className={classes.maps}
      allowFullScreen={false}
      loading="lazy"
    />
  );
};

export default GoogleMaps;
