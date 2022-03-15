import { Box, Button, Container } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const MainPage = () => {
  return (
    <Container maxWidth="xl" disableGutters sx={{ mt: "300px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "pink",
          height: "300px",
        }}
      >
        <Button
          variant="contained"
          size="large"
          disableElevation
          startIcon={<ShoppingCartOutlinedIcon />}
          sx={{textTransform: "none", width: "600px", borderRadius: "40px", p: "12px"}}
          onClick={() => alert("You opened popup window")}
        >
          Add to shopping cart
        </Button>
      </Box>
    </Container>
  );
};
export default MainPage;
