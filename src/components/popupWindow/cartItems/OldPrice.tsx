import { Box } from "@mui/material";
import React from "react";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";

type OldPricePropsType = {
  price: string;
};

const OldPrice: React.FC<OldPricePropsType> = ({
  price,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        textDecoration: "line-through",
        mt: "30px",
      }}
    >
      <EuroOutlinedIcon
        sx={{ width: "12px", height: "12px", mb: "3px" }}
      />
      <Box
        sx={{
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {price}
      </Box>
    </Box>
  );
};
export default OldPrice;
