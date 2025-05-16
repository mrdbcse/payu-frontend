import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#e0f7fa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CheckCircleOutlineIcon sx={{ fontSize: 80, color: "green" }} />
      <Typography variant="h4" mt={2}>
        Payment Successful
      </Typography>
      <Typography variant="body1" mt={1}>
        Thank you for your purchase! Your transaction has been completed.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate("/", { replace: true })}
      >
        Continue Shopping
      </Button>
    </Box>
  );
};

export default PaymentSuccess;
