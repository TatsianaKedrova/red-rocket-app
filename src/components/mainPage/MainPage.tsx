import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ModalContainer from "../popupWindow/ModalContainer";
import CommonButton from "../../commonComponents/CommonButton";
import { mainComponentStyle } from "./mainComponentStyle.style";

const MainPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="xl" disableGutters sx={{ mt: "300px" }}>
      <Box sx={mainComponentStyle.container}>
        <CommonButton
          startIcon={<ShoppingCartOutlinedIcon />}
          onClick={handleOpen}
        >
          Add to shopping cart
        </CommonButton>
        <ModalContainer open={open} handleClose={handleClose} />
      </Box>
    </Container>
  );
};
export default MainPage;
