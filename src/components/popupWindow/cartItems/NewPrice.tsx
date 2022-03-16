import { Box } from "@mui/material";
import React, { useMemo } from "react";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import { popupStyle } from "../styles/popupWindowStyles.styles";

type NewPricePropsType = {
  price: number;
  isOldPriceBeside: boolean;
};

const NewPrice: React.FC<NewPricePropsType> = ({ price, isOldPriceBeside }) => {
  const priceColor = useMemo(() => {
    return isOldPriceBeside ? "red" : "inherit";
  }, [isOldPriceBeside]);

  return (
    <Box sx={popupStyle.priceContainer}>
      <EuroOutlinedIcon
        htmlColor={priceColor}
        sx={{ width: "12px", height: "12px", mb: "3px" }}
      />
      <Box
        sx={{
          fontSize: "12px",
          fontWeight: "bold",
          color: priceColor,
        }}
      >
        {price.toFixed(2)}
      </Box>
    </Box>
  );
};
export default NewPrice;



























// const commonFunction = useMemo(() => {
//     if (isOldPriceComponent && !isOldPriceBeside) {
//       return "inherit";
//     } else if (isOldPriceComponent && isOldPriceBeside) {
//       return "red";
//     } else {
//       return "inherit";
//     }
//   }, [isOldPriceComponent, isOldPriceBeside]);
