import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import {
  Container,
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { CoinList } from "../config/api";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinsTable(props) {
  const [coins, setCoins] = useState([]);
  const [Count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol } = CryptoState();

  const useStyles = makeStyles({
    row_white: {
      backgroundColor: "white",
      cursor: "pointer",

      fontFamily: "Shabnam",
    },
    row_grey: {
      backgroundColor: "ghostwhite",
      cursor: "pointer",

      fontFamily: "Shabnam",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "black",
      },
    },
  });

  const classes = useStyles();
  const history = useHistory();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
      type: "dark",
    },
  });

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(page));
    console.log(data);
    setCoins(data.results);
    if(Count==0)setCount(data.count);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleSearch = () => {
    return coins;
  };
  String.prototype.EntoFa = function () {
    return this.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
    
  };const options = {
  
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }} maxWidth>
        <Typography variant="h4" style={{ margin: 18, fontFamily: "Shabnam" }}>
         {props.title}
        </Typography>
        {/* <TextField
          label="اینجا اسم سهم را بنویس ..."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%", color: "black" ,borderColor:"black"}}
          onChange={(e) => setSearch(e.target.value)}
        /> */}
        <TableContainer component={Paper} style={{ maxWidth:"100%" }}>
         
            <Table
              aria-label="simple table"
              style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",width:"100%" }}
            >
              <TableHead style={{ backgroundColor: "white" }}>
                <TableRow>
                  {[
                    "سهم",
                    "نوع افزایش سرمایه",
                    "درصد افزایش سرمایه",
                    "پیشنهاد هیئت مدیره",
                    "اظهار نظر حسابرس",
                    "مدارک",
                    " آگهی دعوت به مجمع",
                    "مجمع",
                    "شروع استفاده از حق تقدم",
                    "پایان استفاده از حق تقدم",
                    "شروع پذیره نویسی",
                    "پایان پذیره نویسی",
                    "نتایج حق تقدم استفاده نشده",
                    "ثبت افزایش سرمایه",
                  ].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontFamily: "Shabnam",
                        border: "none",
                        paddingRight: 20,
                        paddingLeft: 20,
                        alignContent: "space-evenly",
                        textAlign: "center",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  // .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row, index) => {
                    
                    return (
                      <TableRow
                        onClick={() => history.push(`/sahm/${row.id}`)}
                        className={
                          index % 2 ? classes.row_white : classes.row_grey
                        }
                        key={row.ticker}
                        style={{
                          paddingRight: 20,
                          paddingLeft: 20,
                          alignContent: "space-evenly",
                          textAlign: "center",
                        }}
                      >
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                          
                          {row.ticker}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            gap: 15,
                            border: "none",
                            fontWeight: 500,
                            fontFamily: "Shabnam",
                            textAlign: "center",
                            color: "black",
                          }}
                        >
                        
                        {
                            row.fundRaiseWay
                         }
                        
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                          
                          {numberWithCommas(
                            row.percentage.toFixed(2)
                          ).EntoFa()}
                        </TableCell>
                        
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                          {row.boardProposalDate}
                          
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                         
                          {
                            row.auditorRegardDate}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                         
                          {
                            row.fundraiseDocumentationDate

                          }
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                         
                          {
                            row.meetingAnnouncmentDate
                          }
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                         
                          {
                            row.meetingDate
                          }
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                         
                          {
                            row.startHPremitiveRight
                          }
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                         
                          {
                            row.endHPremitiveRight
                          }
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                         
                          {
                            row.startPPremitiveRight
                          }
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                         
                          {
                            row.endPPremitiveRight
                          }
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                         
                          {
                            row.unusedPremitiveRightsDate
                          }
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "black",
                            fontWeight: 500,
                            border: "none",
                            fontFamily: "Shabnam",
                            alignContent: "space-evenly",
                            textAlign: "center",
                          }}
                        >
                         
                          {
                            row.fundraiseRegistrationDate
                          }
                        </TableCell>
                     
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
        </TableContainer>
      

        {/* Comes from @material-ui/lab */}
        <Pagination
          count={(Count / 20).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            direction: "ltr !important",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
