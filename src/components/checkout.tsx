import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";

declare global {
  interface Window {
    bolt: any;
  }
}

const Checkout: React.FC = () => {
  const handlePayment = async () => {
    console.log("Payment Button Clicked!!");

    try {
      const data = {
        amount: "1",
        full_name: "DebjyotiBanerjee",
        email: "debjyoti.banerjee@aoplenergy.com",
        phone: "9876543210",
        product_info: "Test Payment",
      };

      const res = await axios.post(
        "http://localhost:8000/initiate_payment",
        data
      );
      console.log(res);

      const paymentData = res.data.data;
      console.log("paymentData:", paymentData);

      const form = document.createElement("form");
      form.method = paymentData.method;
      form.action = paymentData.action_url;
      Object.keys(paymentData).forEach((key) => {
        if (key !== "method" && key !== "action_url") {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = paymentData[key];
          form.appendChild(input);
        }
      });
      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Payment Initiation Failed: ", error);
    }
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" color="white" mb={3}>
        Checkout
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1558449028-b53a39d100fc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXJ8ZW58MHx8MHx8fDA%3D"
          alt="Solar Panel 100W"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Solar Panel 100W
          </Typography>
          <Typography variant="body2" color="text.secondary">
            High-efficiency solar panel suitable for residential use.
          </Typography>
          <Typography variant="h6" color="text.primary" mt={2}>
            ₹1.00
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handlePayment}
          >
            Buy Now
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Checkout;
