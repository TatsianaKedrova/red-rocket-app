import React, { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ModalContainer from "../popupWindow/ModalContainer";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <Button
          variant="contained"
          size="large"
          disableElevation
          startIcon={<ShoppingCartOutlinedIcon />}
          sx={{
            textTransform: "none",
            width: "600px",
            borderRadius: "40px",
            p: "12px",
          }}
          onClick={handleOpen}
        >
          Add to shopping cart
        </Button>
        <ModalContainer open={open} handleClose={handleClose} />
      </Box>
    </Container>
  );
};
export default MainPage;
