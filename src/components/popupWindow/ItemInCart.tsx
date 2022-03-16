import { Box } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SingleItemType } from "../../bll/cartItemsReducer";
import { AppRootStateType } from "../../bll/store";

const ItemInCart = () => {
  const incrementItem = useSelector<AppRootStateType, SingleItemType[]>(
    (state) => state.cartItems
  );
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100px",
        alignItems: "center",
        pt: "15px",
        pb: "15px",
      }}
    >
      <Box>Item Photo</Box>
      <Box sx={{ flexGrow: 2, ml: "10px" }}>Item Info</Box>
      <Box>item Price</Box>
    </Box>
  );
};

export default ItemInCart;
