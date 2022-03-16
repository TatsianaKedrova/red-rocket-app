import { Box } from "@mui/material";
import React, { useCallback, useMemo } from "react";
import {
  ItemOptionsType,
  removeItemFromCart,
} from "../../../bll/cartItemsReducer";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { popupStyle } from "../styles/popupWindowStyles.styles";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import NewPrice from "./NewPrice";
import OldPrice from "./OldPrice";

type ItemCartType = {
  increment: (id: string) => void;
  decrement: (id: string) => void;
  itemPhoto: string;
  name: string;
  oldPrice?: number;
  newPrice: number;
  id: string;
  itemsCount: number;
  options?: ItemOptionsType;
};

const ItemInCart: React.FC<ItemCartType> = ({
  decrement,
  id,
  increment,
  itemsCount,
  itemPhoto,
  name,
  newPrice,
  oldPrice,
  options,
}) => {
  const dispatch = useDispatch();

  const itemColor = useMemo(() => {
    if (options?.color) {
      return options.color.charAt(0).toUpperCase() + options.color.slice(1);
    }
  }, [options?.color]);

  const handleDecrement = useCallback(() => {
    if (itemsCount < 2) {
      dispatch(removeItemFromCart({ id: id }));
    } else if (itemsCount >= 1) {
      decrement(id);
    } else {
      return;
    }
  }, [itemsCount]);

  return (
    <Box sx={popupStyle.itemCartContainer}>
      <Box sx={{ m: "auto 0" }}>
        <img src={itemPhoto} alt="itemPhoto" width="40px" height="45px" />
      </Box>
      <Box sx={popupStyle.itemInfoContainer}>
        <Box sx={{ fontSize: "13px", fontWeight: "bold" }}>{name}</Box>
        {options && (
          <Box sx={{ fontSize: "11px", mt: "5px" }}>
            Color: {itemColor}{" "}
            {
              <FiberManualRecordIcon
                sx={{ width: "4px", height: "4px", mb: "2px" }}
              />
            }{" "}
            Size: {options.size}{" "}
            {
              <FiberManualRecordIcon
                sx={{ width: "4px", height: "4px", mb: "2px" }}
              />
            }{" "}
            Weight: {options.weight}
          </Box>
        )}
        <Box sx={popupStyle.countContainer}>
          <Box
            onClick={() => handleDecrement()}
            sx={{ cursor: "pointer", mt: "8px" }}
          >
            <RemoveIcon sx={{ width: "15px" }} />
          </Box>
          <Box sx={{ fontSize: "14px", mr: "3px" }}>{itemsCount}</Box>
          <Box onClick={() => increment(id)} sx={{ cursor: "pointer" }}>
            +
          </Box>
        </Box>
      </Box>
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "pink"}}>
        {oldPrice && <OldPrice price={oldPrice} />}
        <NewPrice price={newPrice} isOldPriceBeside={!!oldPrice} />
      </Box>
    </Box>
  );
};

export default ItemInCart;
