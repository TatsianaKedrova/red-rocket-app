import { Stack, Typography } from "@mui/material";
import React from "react";

const HeaderText = () => {
  return (
    <Stack direction={"column"} spacing={1} sx={{textAlign: "center", mt: "18px"}}>
      <Typography fontSize={20} fontWeight={"bold"}>Your shopping cart</Typography>
      <Typography fontSize={13}>Order now and your order will be shipped for free</Typography>
    </Stack>
  );
};
export default HeaderText;
