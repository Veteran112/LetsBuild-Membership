/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import moment from 'moment';
import constants from "../../constant";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import truncateEthAddress from 'truncate-eth-address';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

function Transacton() {

  const [listItems, setListItems] = useState([]);

  const rows=[1]
  const tok = sessionStorage.getItem('authToken');
  const decoded = jwt_decode(tok);

  const getAllTransaction = () => {
    try {
      let apiUrl = `${constants.baseURL}/transaction`;
      return axios.post(apiUrl,{
        user_id: decoded?.doc?._id
      })
    } catch (error) {
      console.log(error.message);
    }
  }
  
  useEffect(() => {
		getAllTransaction()
    .then(response => response.data)
    .then(data => {
      const items = rows?.map(
        (el, j) => {
            return (
              <TableContainer style={{background:'white'}} key={j}>
                <Table sx={{ minWidth: 650,height:'max-content' }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Si. No.</TableCell>
                      <TableCell align="center">Transaction ID</TableCell>
                      <TableCell align="center">Card Type</TableCell>
                      <TableCell align="center">Date & Time</TableCell>
                      <TableCell align="center">Paid Amount</TableCell>
                      <TableCell align="center">Transaction Hash</TableCell>
                      <TableCell align="center">Transaction Receipt</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { data?.length !==0 ? data.map((row,i) => (
                      <TableRow
                        key={i}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center" component="th" scope="row">
                          {i+1}
                        </TableCell>
                        <TableCell align="center">#{row?.number.split("_")[1]}</TableCell>
                        <TableCell align="center">
                        <img
                          src={`/${row.ccType}.png`} alt="Card"
                          style={{ width: "40px", marginTop: 0 }}
                        />

                        </TableCell>
                        <TableCell align="center">  {moment(row?._createdAt).format("LLL")}</TableCell>
                        <TableCell align="center">{row?.paidAmount.toFixed(2)}$</TableCell>
                        <TableCell align="center">
                          <a target="_blank" href={`https://testnet.bscscan.com/tx/${row?.tokenTransactionHash}`} rel="noreferrer">
                            {row?.tokenTransactionHash && truncateEthAddress(row?.tokenTransactionHash)}
                          </a>
                        </TableCell>
                        <TableCell>    
                            <a href={row?.paymentMethod?.receipt_url} target="_blank" rel="noreferrer">Click to see...</a>
                        </TableCell>
                      </TableRow>
                    )):
                      <TableRow>
                        <h3 style={{position:'absolute',left:'50%',transform:'translateX(-50%)',marginTop:'30px'}}>No Data Found..</h3>
                      </TableRow>
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            )
        }
      )
      setListItems(items);
    })
	}, [])

  return (
    <Grid container mt={2}> 
    
    <div className="rdc" style={{ height: "700px", backgroundColor: "#fff" }}>
      {listItems}
    </div>
    </Grid>
  );
}

export default Transacton;
