import { Box, Button, TextField, Typography } from "@mui/material";
import { NextPage } from "next";
import React, { useState } from "react";
import useStyles from "./styles";
import CloseIcon from "@mui/icons-material/Close";

interface IContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type IContactFormErrorLabel = "name" | "email";

interface IContactInfoFormData {
  values: IContactFormValues;
  error: {
    name: string | null;
    email: string | null;
  };
}

interface IContactUsForm {
  onSubmit: (values: IContactFormValues) => void;
  error: string | null;
  marginTop?: string;
}

const checkEmailValidity = (email: string): boolean => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const ContactUsForm: NextPage<IContactUsForm> = (props) => {
  const classes = useStyles();
  const [formData, setFormData] = useState<IContactInfoFormData>({
    values: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    error: {
      name: null,
      email: null,
    },
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      values: {
        ...formData.values,
        [name]: value,
      },
      error: {
        ...formData.error,
        [name]: value !== "" ? false : true,
      },
    });
  };

  return (
    <Box
      className={classes.formWrapper}
      style={{
        ...(props.marginTop ? { marginTop: props.marginTop } : {}),
      }}
    >
      <Box height={1} className={classes.inputComponentsWrapper}>
        <Box className={classes.contactInfoWrapper}>
          {[
            { label: "Name", placeholder: "Enter your name" },
            { label: "Email", placeholder: "Enter your email" },
            { label: "Subject", placeholder: "Type the subject " },
          ].map((item, index) => {
            return (
              <Box key={index} mr={index !== 2 ? "10px" : "0px"} width={1}>
                <Typography className={classes.label}>{item.label}</Typography>
                <TextField
                  name={item.label.toLowerCase()}
                  size="small"
                  inputProps={{
                    className: classes.contactInfoInput,
                  }}
                  autoFocus={!index}
                  fullWidth
                  tabIndex={index}
                  placeholder={item.placeholder}
                  variant="outlined"
                  InputProps={{
                    classes: {
                      root: `${classes.cssOutlinedInput} ${classes.contactInfoInputHeight}`,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  onChange={handleChange}
                />
                {formData.error[item.label.toLowerCase() as IContactFormErrorLabel] ? (
                  <Typography color="#d9534f" fontSize="12px" marginTop="2px" marginBottom="5px">
                    {formData.error[item.label.toLowerCase() as IContactFormErrorLabel]}
                  </Typography>
                ) : null}
              </Box>
            );
          })}
        </Box>
        <Box style={{ width: "100%" }}>
          <Typography className={classes.label}>Message</Typography>
          <TextField
            name="message"
            inputProps={{
              className: classes.messageInput,
            }}
            InputProps={{
              className: classes.paddingZero,
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            fullWidth
            tabIndex={3}
            placeholder="Type your message here..."
            variant="outlined"
            multiline
            rows={4}
            onChange={handleChange}
          />
        </Box>
        <Box style={{ textAlign: "end" }}>
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "black",
              textDecoration: "none",
              padding: "6px 24px",
            }}
            onClick={() => {
              const errorInName = formData.values.name === "" ? "Required" : null;
              const errorInEmail =
                formData.values.email === ""
                  ? "Required"
                  : !checkEmailValidity(formData.values.email)
                  ? "Invalid Email"
                  : null;
              if (errorInEmail || errorInName) {
                setFormData({
                  ...formData,
                  error: {
                    name: errorInName,
                    email: errorInEmail,
                  },
                });
              } else {
                props.onSubmit(formData.values);
              }
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      {props.error && (
        <Typography className={classes.error}>
          <CloseIcon fontSize="small" />
          {props.error}
        </Typography>
      )}
    </Box>
  );
};

export default ContactUsForm;
