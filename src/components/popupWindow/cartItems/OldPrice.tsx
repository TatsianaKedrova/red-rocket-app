import { Box } from "@mui/material";
import React from "react";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import { popupStyle } from "../styles/popupWindowStyles.styles";

type OldPricePropsType = {
  price: number;
};

const OldPrice: React.FC<OldPricePropsType> = ({ price }) => {
  return (
    <Box sx={[popupStyle.priceContainer, { textDecoration: "line-through" }]}>
      <EuroOutlinedIcon sx={{ width: "12px", height: "12px", mb: "3px" }} />
      <Box
        sx={{
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {price.toFixed(2)}
      </Box>
    </Box>
  );
};
export default OldPrice;
