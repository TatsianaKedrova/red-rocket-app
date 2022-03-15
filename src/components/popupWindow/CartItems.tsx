import { Stack } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import ItemInCart from "./ItemInCart";
import { popupStyle } from "./popupWindowStyles.styles";

const CartItems = () => {
  return (
    <Stack
      direction={"column"}
      divider={<Divider orientation="horizontal" light />}
      sx={popupStyle.cartItemsStackStyle}
    >
      <ItemInCart />
      <ItemInCart />
    </Stack>
  );
};

export default CartItems;

//#d3d3d3
