import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ItemOptionsType } from "../../../bll/cartItemsReducer";

type OptionsComponentPropsType = {
  options: ItemOptionsType;
};

const OptionsComponent: React.FC<OptionsComponentPropsType> = ({ options }) => {
  const itemColor = useMemo(() => {
    if (options?.color) {
      return options.color.charAt(0).toUpperCase() + options.color.slice(1);
    }
  }, [options?.color]);

  return (
    <Box sx={{ fontSize: "11px", mt: "5px" }}>
      Color: {itemColor}
      {
        <FiberManualRecordIcon
          sx={{ width: "4px", height: "4px", mb: "2px" }}
        />
      }
      Size: {options.size}
      {
        <FiberManualRecordIcon
          sx={{ width: "4px", height: "4px", mb: "2px" }}
        />
      }
      Weight: {options.weight}
    </Box>
  );
};
export default OptionsComponent;
