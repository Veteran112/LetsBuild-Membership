import React from "react";
import RouteSelector from "../routeSelector/Routeselector";
import SeatSelection from "../SeatSelection/SeatSelection";
import PaymentTab from "../PaymentTab/PaymentTab";
import Transacton from "../Transactions/Transacton";
import "./RouteSelection.css";
import PaymentSelector from "../PaymentTab/PaymentSelector";
import Subscription from "../Subscription/Subscription";
import { useHistory } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import JJlogo from "../../images/JJTlogo.png";

export default function RouteSelection({ history }) {
  const handleUserIcon = (e) => {
    e.preventDefault();
    history.push("/profile");
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("reservedSeats");
    localStorage.removeItem("nameData");
    localStorage.clear();
    history.push("/");
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    history.push("/routes");
  };

  return (
    <div className="container">
      <div>
        <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
          <div
            style={{
              textalign: "center",
              position: "absolute",
              top: "1%",
              left: "35%",
              transform: "translate-50%, -9%",

              zindex: "1000",
            }}
          >
            <span
              style={{
                color: "white",
                fontFamily: "Piedra, cursive",
                letterSpacing: "10px",
                marginbottom: "20px",

                borderradius: "5px",
                position: "relative",
                animation: "text 3s 1",
              }}
            >
              <a
                href="/"
                className="navbar-brand Company-Log"
                onClick={(e) => handleLogoClick(e)}
              >
                <h2 style={{ fontSize: "60px" }}> LetsBuild</h2>
              </a>
            </span>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-3"
            aria-controls="navbarSupportedContent-3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-3"
          >
            <ul className="navbar-nav ml-auto nav-flex-icons ic">
              <li className="nav-item">
                <a
                  href="/#"
                  className="nav-link waves-effect waves-light"
                  onClick={(e) => handleUserIcon(e)}
                >
                  <i className="fa fa-user user"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/#"
                  className="nav-link waves-effect waves-light"
                  onClick={(e) => handleSignOut(e)}
                >
                  Sign-Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <div style={{ display: "flex", padding: "0px 0px" }}>
          <ul
            className="nav nav-pills" 
            style={{ display: "flex", width: "50%",marginTop:122 }}
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                style={{ color: "#fff" }}
                data-toggle="pill"
                href="#licenseplan"
              >
                License Plan
              </a>
            </li>

            
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="pill"
                href="#menu3"
                style={{ color: "#fff" }}
              >
                transactions
              </a>
            </li>
          </ul>
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
          <Grid item   > 
            <Box
              width={"25%"}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={JJlogo} style={{ width: "70px" }} />
              <Typography
                fontSize="25px"
                color="white"
                textTransform="uppercase"
                fontFamily="sans-serif"
              >
                JJT
              </Typography>
              <button
                style={{
                  backgroundColor: "rgb(105, 105, 105)",
                  width: "100px",
                  height: "50px",
                  borderRadius: "30px",
                  border: "none",
                }}
                onClick={() => history.push("/JJT")}
              >
                <Typography
                  fontSize="15px"
                  fontFamily="sans-serif"
                  color="white"
                >
                  850.25$
                </Typography>
              </button>
            </Box>
            </Grid>
          </div>
        </div>

        <div className="tab-content">
          <div className="tab-pane container active mn-box" id="licenseplan">
            <Subscription />
          </div>
          <div className="tab-pane container fade mn-box" id="menu1">
            <SeatSelection />
          </div>
          <div className="tab-pane container fade mn-box" id="menu2">
            <PaymentTab />
          </div>
          <div className="tab-pane container fade mn-box" id="menu3">
            <Transacton />
          </div>
        </div>
      </div>
    </div>
  );
}
