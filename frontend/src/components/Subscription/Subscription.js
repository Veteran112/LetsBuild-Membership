import * as React from "react";
import { Grid, Box, Typography, Card, Button } from "@mui/material";
import Basic from "../../images/BasicLogo.png";
import Plus from "../../images/PlusLogo.png";
import Professional from "../../images/ProfessionalLogo.png";
import Premier from "../../images/PremierLogo.png";
import { useHistory } from "react-router-dom";
import PaymentSelector from "../PaymentTab/PaymentSelector";
import Done2 from "../../images/bluedone1.png";
import Switch from "@mui/material/Switch";

import jwt_decode from 'jwt-decode'

function Subscription() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [isAnnual, setIsAnnual] = React.useState(true)

  const [user, setUser] = React.useState({})

	React.useEffect(() => {
		const tok = sessionStorage.getItem('authToken')
		const decoded = jwt_decode(tok)
		setUser(decoded.doc)
	}, [])



  const billingtypeChange = (event) => {
    setIsAnnual(event.target.checked);
  };

  

  let history = useHistory();
  return (
    <>
    <Box mb={"-55px"}  mt={"16px"} mr={2.4}> 
    <Grid item display="flex" justifyContent="flex-end" alignItems={"center"}  >
      <Typography
        fontSize="14px"
        textAlign="center"
        color="black"
      >
        Billing Type : &nbsp; 
      </Typography>
      <Typography
        fontSize="14px"
        textAlign="center"
        color="black"
      >
        Monthly 
      </Typography>

      <Switch {...label} checked={isAnnual} onChange={billingtypeChange} color="default" sx={{width:"50px", display:"flex" , alignItems:"center", }} mt="-20px" />
      &nbsp;  &nbsp;&nbsp;
      <Typography
        fontSize="14px"
        textAlign="center"
        color="black"
      >
        Annual
      </Typography>
    </Grid>
    </Box>

      <Grid
        container
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <Grid item mt={5} p={1}>
          <Card
            sx={{
              backgroundColor: "#fff",
              width: "260PX",
              height: "600PX",
              border: "1px solid Gray",
            }}
          >
            <Grid item display="flex" justifyContent="center" mt={3}>
              <img src={Basic} style={{ width: "70px" }} />
            </Grid>
            <Typography
              variant="h3"
              color="#0e1724"
              textAlign="center"
              fontSize="1.5rem"
              fontWeight="400"
              fontFamily="Roboto,Helvetica,Neue,sans-serif"
              mt={0}
            >
              Basic
            </Typography>
            <Box display={"flex"} justifyContent="center" mt={1}>
              <Grid container width={"55%"}>
                <Grid md={1} item>
                  <Typography fontWeight={"bold"}>$</Typography>
                </Grid>
                <Grid md={6} item>
                  <Typography fontSize="34px" fontWeight={"bold"}>
                    {
                      isAnnual &&  4.50.toFixed(2)
                    }
                    {
                      !isAnnual && 4.99.toFixed(2)
                    }
                  </Typography>
                </Grid>
                <Grid md={5} paddingTop={2} item>
                  <Typography fontWeight={"bold"}>/month</Typography>
                </Grid>
              </Grid>
            </Box>
            { isAnnual && <>
            <Grid item>
              <Typography
                fontSize="16px"
                fontWeight={"bold"}
                textAlign="center"
              >
                $54.00 billed annually
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                fontSize="18 px"
                color="#5dc26a"
                textAlign="center"
                fontWeight={"bold"}
                mt={1}
              >
                You save $5.88
              </Typography>
            </Grid>
            </> }
            <Grid item display="flex" justifyContent="center" mt={1}>
              <Button
                sx={{
                  width: "90%",
                  backgroundColor: "#007fed",
                  color: "white",
                  fontwwight: "700",
                  border: "1px solid #007fed",
                  cursor: "pointer",
                  marginTop: "10px",
                  "&:hover": { backgroundColor: "#007fed" },
                }}
                onClick={() => {
                  if (!(user.membership && (user.membership.month == 4.99 || user.membership.annual == 4.5))) {
                    localStorage.setItem("licenseplan", JSON.stringify("basic"))
                    localStorage.setItem("isannual", isAnnual)
                    history.push(`/payment`)
                  }
                }}
              >
                <Typography textTransform="none" fontwwight={"bold"}>
                  { !user.membership && "Upgrade" }
                  { user.membership && (user.membership.month > 4.99 || user.membership.annual > 4.5)  && "Downgrade" }
                  { user.membership && (user.membership.month == 4.99 || user.membership.annual == 4.5)  && "Current Plan" }
                </Typography>
              </Button>
            </Grid>
            
            <Grid ml={1} item>
              <Typography
                ml={4}
                mt={3}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                50 Bids per month
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />

              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                50 Skils
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                Unlock Rewards
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                12 Free Sealed
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                Preferred Freelancer Eligible*
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                Custom Cover Photo
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
            </Grid>
          </Card>
        </Grid>
        <Grid item mt={5} p={1}>
          <Card
            sx={{
              backgroundColor: "#fff",
              width: "260PX",
              height: "600PX",
              border: "1px solid Gray",
            }}
          >
            <Grid item display="flex" justifyContent="center" mt={3}>
              <img src={Plus} style={{ width: "70px" }} />
            </Grid>
            <Typography
              variant="h3"
              color="#0e1724"
              textAlign="center"
              fontSize="1.5rem"
              fontWeight="400"
              fontFamily="Roboto,Helvetica,Neue,sans-serif"
              textTransform="none"
              mt={0}
            >
              Plus
            </Typography>
            <Box display={"flex"} justifyContent="center" mt={1}>
              <Grid container width={"55%"}>
                <Grid md={1} item>
                  <Typography fontWeight={"bold"}>$</Typography>
                </Grid>
                <Grid md={6} item>
                  <Typography fontSize="34px" fontWeight={"bold"}>
                    {
                      isAnnual &&  8.90.toFixed(2)
                    }
                    {
                      !isAnnual && 9.99.toFixed(2)
                    }
                  </Typography>
                </Grid>
                <Grid md={5} paddingTop={2} item>
                  <Typography fontWeight={"bold"}>/month</Typography>
                </Grid>
              </Grid>
            </Box>
            { isAnnual && <>
            <Grid item>
              <Typography
                fontSize="16px"
                fontWeight={"bold"}
                textAlign="center"
              >
                $106.80 billed annually
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                fontSize="18 px"
                color="#5dc26a"
                textAlign="center"
                fontWeight={"bold"}
                mt={1}
              >
                You save $13.08
              </Typography>
            </Grid>
            </> }
            <Grid item>
              <Grid item display="flex" justifyContent="center" mt={1}>
                <Button
                  sx={{
                    width: "90%",
                    backgroundColor: "#5dc26a",
                    color: "white",
                    fontwwight: "700",
                    border: "1px solid #5dc26a",
                    cursor: "pointer",
                    marginTop: "10px",
                    "&:hover": { backgroundColor: "#2bd661" },
                  }}
                  onClick={() => history.push(`/payment?plan=plus&isAnnual=${isAnnual}`)}
                >
                  <Typography textTransform="none" fontwwight={"bold"}>
                    Start Free Trial
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid ml={1} item>
              <Typography
                ml={4}
                mt={3}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                50 Bids per month
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />

              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                50 Skils
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                Unlock Rewards
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                12 Free Sealed
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />

              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                Custom Cover Photo
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                5 Free Highlighted
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                25 Free Sealed
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                Free Project Extensions
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
            </Grid>
          </Card>
        </Grid>
        <Grid item mt={5} p={1}>
          <Card
            sx={{
              backgroundColor: "#fff",
              width: "260PX",
              height: "600PX",
              border: "1px solid Gray",
            }}
          >
            <Grid item display="flex" justifyContent="center" mt={3}>
              <img src={Professional} style={{ width: "70px" }} />
            </Grid>
            <Typography
              variant="h3"
              color="#0e1724"
              textAlign="center"
              fontSize="1.5rem"
              fontWeight="400"
              fontFamily="Roboto,Helvetica,Neue,sans-serif"
              mt={0}
            >
              Professional
            </Typography>
            <Box display={"flex"} justifyContent="center" mt={1}>
              <Grid container width={"70%"}>
                <Grid md={1} item>
                  <Typography fontWeight={"bold"}>$</Typography>
                </Grid>
                <Grid md={6} item>
                  <Typography fontSize="34px" fontWeight={"bold"}>
                    {
                      isAnnual &&  39.90.toFixed(2)
                    }
                    {
                      !isAnnual && 49.00.toFixed(2)
                    }
                  </Typography>
                  
                </Grid>
                <Grid md={5} paddingTop={2} item>
                  <Typography fontWeight={"bold"}>/month</Typography>
                </Grid>
              </Grid>
            </Box>
            { isAnnual && <>
            <Grid item>
              <Typography
                fontSize="16px"
                fontWeight={"bold"}
                textAlign="center"
              >
                $478.80 billed annually
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                fontSize="18 px"
                color="#5dc26a"
                textAlign="center"
                fontWeight={"bold"}
                mt={1}
              >
                You save $109.20
              </Typography>
            </Grid>
            </> }
            <Grid item display="flex" justifyContent="center" mt={1}>
              <Button
                sx={{
                  width: "90%",
                  backgroundColor: "#007fed",
                  color: "white",
                  fontwwight: "700",
                  border: "1px solid #007fed",
                  cursor: "pointer",
                  marginTop: "10px",
                  "&:hover": { backgroundColor: "#007fed" },
                }}
                onClick={() => history.push(`/payment?plan=professional&isAnnual=${isAnnual}`)}
              >
                <Typography textTransform="none" fontwwight={"bold"}>
                  Upgrade
                </Typography>
              </Button>
            </Grid>
            
            <Grid ml={1} item>
              <Typography
                ml={4}
                mt={3}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                50 Bids per month
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />

              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                50 Skils
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                Unlock Rewards
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                12 Free Sealed
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                Preferred Freelancer Eligible*
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                Custom Cover Photo
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
            </Grid>
          </Card>
        </Grid>
        <Grid item mt={5} p={1}>
          <Card
            sx={{
              backgroundColor: "#fff",
              width: "260PX",
              height: "600PX",
              border: "1px solid Gray",
            }}
          >
            <Grid item display="flex" justifyContent="center" mt={3}>
              <img src={Premier} style={{ width: "70px" }} />
            </Grid>
            <Typography
              variant="h3"
              color="#0e1724"
              textAlign="center"
              fontSize="1.5rem"
              fontWeight="400"
              fontFamily="Roboto,Helvetica,Neue,sans-serif"
              textTransform="none"
              mt={0}
            >
              Premier
            </Typography>
            <Box display={"flex"} justifyContent="center" mt={1}>
              <Grid container width={"70%"}>
                <Grid md={1} item>
                  <Typography fontWeight={"bold"}>$</Typography>
                </Grid>
                <Grid md={6} item>
                  <Typography fontSize="34px" fontWeight={"bold"}>
                    {
                      isAnnual &&  79.90.toFixed(2)
                    }
                    {
                      !isAnnual && 99.00.toFixed(2)
                    }
                  </Typography>
                </Grid>
                <Grid md={5} paddingTop={2} item>
                  <Typography fontWeight={"bold"}>/month</Typography>
                </Grid>
              </Grid>
            </Box>
            { isAnnual && <>
            <Grid item>
              <Typography
                fontSize="16px"
                fontWeight={"bold"}
                textAlign="center"
              >
                $958.80 billed annually
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                fontSize="18 px"
                color="#5dc26a"
                textAlign="center"
                fontWeight={"bold"}
                mt={1}
              >
                You save $229.20
              </Typography>
            </Grid>
            </> }
            <Grid item>
              <Grid item display="flex" justifyContent="center" mt={1}>
                <Button
                  sx={{
                    width: "90%",
                    backgroundColor: "#007fed",
                    color: "white",
                    fontwwight: "700",
                    border: "1px solid #007fed",
                    cursor: "pointer",
                    marginTop: "10px",
                    "&:hover": { backgroundColor: "#007fed" },
                  }}
                  onClick={() => history.push(`/payment?plan=premier&isAnnual=${isAnnual}`)}
                >
                  <Typography textTransform="none" fontwwight={"bold"}>
                    Upgrade
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid ml={1} item>
              <Typography
                ml={4}
                mt={3}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                50 Bids per month
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />

              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                50 Skils
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                Unlock Rewards
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                12 Free Sealed
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />

              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                Custom Cover Photo
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                5 Free Highlighted
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                25 Free Sealed
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
              <Typography
                ml={4}
                mt={-2}
                color="#0e1724"
                fontFamily="sans-serif"
                fontSize="16px"
                fontWeight={"bold"}
              >
                Free Project Extensions
              </Typography>

              <img
                src={Done2}
                style={{ width: "15px", marginTop: -53, marginLeft: 13 }}
              />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Subscription;
