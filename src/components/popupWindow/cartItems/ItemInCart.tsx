import { Box, Paper } from "@mui/material";
import React, { useMemo } from "react";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import { ItemOptionsType } from "../../../bll/cartItemsReducer";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { popupStyle } from "../styles/popupWindowStyles.styles";
import RemoveIcon from "@mui/icons-material/Remove";

type ItemCartType = {
  increment: (id: string) => void;
  decrement: (id: string) => void;
  itemPhoto: string;
  name: string;
  oldPrice?: string;
  newPrice: string;
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
  const itemColor = useMemo(() => {
    if (options?.color) {
      return options.color.charAt(0).toUpperCase() + options.color.slice(1);
    }
  }, [options?.color]);

  return (
    <Box sx={popupStyle.itemCartContainer}>
      <Box sx={{ m: "auto 0" }}>
        <img src={itemPhoto} alt="itemPhoto" width="40px" height="45px" />
      </Box>

      <Box sx={popupStyle.itemInfoContainer}>
        <Box sx={{ flexGrow: 2, fontSize: "13px", fontWeight: "bold" }}>
          {name}
        </Box>
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
            onClick={() => decrement(id)}
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

      <Box>
        <EuroOutlinedIcon />
        <Paper>{newPrice}</Paper>
      </Box>
    </Box>
  );
};

export default ItemInCart;
