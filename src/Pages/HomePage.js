import React from "react";
import { makeStyles } from "@material-ui/core";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import CoinsTable2 from "../components/CoinsTable2";
const useStyles = makeStyles(() => ({
  Padding: {
    Padding:20,
  },
}));
const Homepage = () => {
  const classes = useStyles();
  return (
    <>
      <Banner />
      <div className={classes.Padding} ><CoinsTable title="افزایش سرمایه به روش حق تقدم" /></div>
      <div className={classes.Padding} ><CoinsTable2 title="افزایش سرمایه به روش های دیگر" /></div>
      
    </>
  );
};

export default Homepage;
