import React from "react";
import { Grid, Box, Typography, Card, Button } from "@mui/material";
import JJlogo from "../../images/JJTlogo.png";
import Send from "../../images/send.png";
import Recive from "../../images/recive.png";

function JJT() {
  return (
    <Grid container>
      <Grid item>
        <Box
          sx={{
            backgroundColor: "#282a35",
            width: "800px",
            height: "400px",
            borderRadius: "10px",
          }}
        >
          <Grid item display="flex" justifyContent="center" width="100%">
            <img src={JJlogo} style={{ width: "100px" }} />
          </Grid>
          <Grid item display="flex" justifyContent="center" width="100%">
            <Typography variant="h3" fontFamily="sans-serif" color="#007bff">
              66.856732.JJT
            </Typography>
          </Grid>
          <Grid item display="flex" justifyContent="center" width="100%">
            <Typography variant="h6" fontFamily="sans-serif" color="#fff">
              71.50 USD
            </Typography>
          </Grid>

          <Grid item ml={24} mt={4}>
            <Button
              sx={{
                width: "230px",
                height: "40px",
                border: "2px solid #007bff",
                borderRadius: "12px",
              }}
            >
              <Typography
                variant="h6"
                fontFamily="sans-serif"
                color="#fff"
                textTransform="none"
              >
                Send
              </Typography>
            </Button>
          </Grid>
          <Grid item mt={-5.6} ml={18}>
            <img src={Send} style={{ width: "50px" }} />
          </Grid>

          <Grid item ml={56} mt={-5.5}>
            <Button
              sx={{
                width: "230px",
                height: "40px",
                border: "2px solid #007bff",
                borderRadius: "12px",
              }}
            >
              <Typography
                variant="h6"
                fontFamily="sans-serif"
                color="#fff"
                textTransform="none"
              >
                Recive
              </Typography>
            </Button>
          </Grid>
          <Grid item mt={-5.6} ml={85}>
            <img src={Recive} style={{ width: "50px" }} />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default JJT;
