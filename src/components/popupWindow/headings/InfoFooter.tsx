import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { popupStyle } from "../styles/popupWindowStyles.styles";

const InfoFooter = () => {
  return (
    <Box sx={popupStyle.infoFooterContainer}>
      <InfoOutlinedIcon
        htmlColor="#1e90ff"
        sx={{ mr: "5px", width: "22px", height: "22px" }}
      />
      <Typography fontSize={12} color={"#1e90ff"} fontWeight={"bold"}>
        The items in your shoppong cart are not reserved for you
      </Typography>
    </Box>
  );
};

export default InfoFooter;
