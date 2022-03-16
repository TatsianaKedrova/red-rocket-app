import { Box } from "@mui/material";
import React, { useMemo } from "react";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";

type NewPricePropsType = {
  price: string;
  isOldPriceBeside: boolean;
  
};

const NewPrice: React.FC<NewPricePropsType> = ({
  price,
  isOldPriceBeside,
  
}) => {
  const priceColor = useMemo(() => {
    return isOldPriceBeside ? "red" : "inherit";
  }, [isOldPriceBeside]);


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        mt: "30px",
        ml: "5px"
      }}
    >
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
        {price}
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