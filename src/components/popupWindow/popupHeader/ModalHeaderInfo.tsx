import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import { Box, Stack } from "@mui/material";
import { popupStyle } from "../styles/popupWindowStyles.styles";

const ModalHeaderInfo = () => {
  return (
    <Stack direction={"column"} sx={popupStyle.stackHeader}>
      <Box sx={popupStyle.goodToPassUp}>TOO GOOD TO PASS UP, RIGHT?</Box>
      <Box sx={popupStyle.orderEuroStyle}>
        <Box
          sx={{
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          Order now and receive
        </Box>
        <Box sx={popupStyle.euroFieldStyle}>
          <EuroOutlinedIcon
            htmlColor="#1e90ff"
            sx={{ width: "12px", height: "12px", fontWeight: "bold" }}
          />
          <span
            style={{
              fontSize: "12px",
              color: "#1e90ff",
              fontWeight: "bold",
            }}
          >
            5,00
          </span>
        </Box>
        <Box
          sx={{
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          in your wallet.
        </Box>
        <span>
          <InfoOutlinedIcon htmlColor="#1e90ff" sx={popupStyle.infoIconStyle} />
        </span>
      </Box>
    </Stack>
  );
};

export default ModalHeaderInfo;
