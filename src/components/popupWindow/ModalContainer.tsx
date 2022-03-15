import { Box, Container, Modal, Stack } from "@mui/material";
import React from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import { popupStyle } from "../popupWindow/popupWindowStyles.styles";
import ModalHeaderInfo from "./ModalHeaderInfo";
import HeaderText from "./HeaderText";
import CartItems from "./CartItems";
import InfoFooter from "./InfoFooter";

type ModalContainerProps = {
  open: boolean;
  handleClose: () => void;
};

const ModalContainer: React.FC<ModalContainerProps> = ({
  handleClose,
  open,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container disableGutters fixed sx={popupStyle.modalContainer}>
        <Box
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleClose}
        >
          <CancelIcon
            htmlColor="#d3d3d3"
            sx={{ width: "20px", height: "20px" }}
          />
        </Box>
        <ModalHeaderInfo />
        <HeaderText />
        <CartItems />
        <InfoFooter />
      </Container>
    </Modal>
  );
};

export default ModalContainer;
