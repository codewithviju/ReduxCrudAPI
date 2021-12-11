import React from "react";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  headingColor: {
    backgroundColor: "#FF7F50",
    color: "white",
  },
});
const Header = () => {
  const clasess = useStyle();
  return (
    <>
      <Box textAlign="center" className={clasess.headingColor} p={2} mb={2}>
        <Typography variant="h5" align="right">
          All Right Reserved
        </Typography>
      </Box>
    </>
  );
};

export default Header;
