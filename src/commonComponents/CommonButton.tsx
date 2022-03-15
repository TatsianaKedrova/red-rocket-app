import { Button, ButtonProps } from "@mui/material";
import React from "react";

const CommonButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      variant="contained"
      size="large"
      disableElevation
      sx={{
        width: "400px",
        borderRadius: "40px",
        p: "12px",
        fontSize: "16px",
        lineHeight: "24px",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#5CB1EB",
          color: "neutral.main",
        },
      }}
      {...props}
    />
  );
};

export default CommonButton;
