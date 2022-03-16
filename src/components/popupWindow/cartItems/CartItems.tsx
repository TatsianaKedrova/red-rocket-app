import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import ItemInCart from "./ItemInCart";
import { popupStyle } from "../styles/popupWindowStyles.styles";
import { useSelector, useDispatch } from "react-redux";
import {
  addPrice,
  decrementItem,
  incrementItem,
  SingleItemType,
  subtractPrice,
} from "../../../bll/cartItemsReducer";
import { AppRootStateType } from "../../../bll/store";


const CartItems = () => {
  const cartItems = useSelector<AppRootStateType, SingleItemType[]>(
    (state) => state.cartItems
  );
  const dispatch = useDispatch();

  const increment = (id: string) => {
    dispatch(incrementItem({ id: id }));
    dispatch(addPrice({ id: id }));
  };

  const decrement = (id: string) => {
    dispatch(decrementItem({ id: id }));
    dispatch(subtractPrice({ id: id }));
  };

  return (
    <Stack
      direction={"column"}
      divider={<Divider orientation="horizontal" light />}
      sx={popupStyle.cartItemsStackStyle}
    >
      {cartItems.map((item) => (
        <ItemInCart
          key={item.id}
          increment={increment}
          decrement={decrement}
          itemPhoto={item.itemPicture}
          name={item.name}
          oldPrice={item.totalOldPrice}
          newPrice={item.totalNewPrice}
          id={item.id}
          itemsCount={item.itemsCount}
          options={item.itemOptions}
        />
      ))}
    </Stack>
  );
};

export default CartItems;
