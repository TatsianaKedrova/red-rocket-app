import { Stack } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import ItemInCart from "./ItemInCart";
import { popupStyle } from "../styles/popupWindowStyles.styles";
import { useSelector, useDispatch } from "react-redux";
import { SingleItemType } from "../../../bll/cartItemsReducer";
import { AppRootStateType } from "../../../bll/store";

const CartItems = () => {
  const cartItems = useSelector<AppRootStateType, SingleItemType[]>(
    (state) => state.cartItems
  );
  const dispatch = useDispatch();


  return (
    <Stack
      direction={"column"}
      divider={<Divider orientation="horizontal" light />}
      sx={popupStyle.cartItemsStackStyle}
    >
     {cartItems.map(item => (
         <ItemInCart key={item.id} itemPhoto={item.itemPicture} name={item.name} oldPrice={item.oldPrice} newPrice={item.newPrice} id={item.id} itemsCount={item.itemsCount} options={item.itemOptions} />
     ))}
    </Stack>
  );
};

export default CartItems;

