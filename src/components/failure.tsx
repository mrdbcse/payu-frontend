import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentFailure: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#ffebee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: "red" }} />
      <Typography variant="h4" mt={2}>
        Payment Failed
      </Typography>
      <Typography variant="body1" mt={1}>
        Unfortunately, your transaction could not be completed.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 3 }}
        onClick={() => navigate("/", { replace: true })}
      >
        Try Again
      </Button>
    </Box>
  );
};

export default PaymentFailure;
