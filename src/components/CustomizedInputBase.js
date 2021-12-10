import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchResults from "./SearchResults";
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";
var arrayData =  ["Bitcoin", "Etherum", "Litecoin", "Ripple", "Bitcoin Cash","Bitcoin SV"];
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    padding: "2px 4px",
    display: "flex",
    alignItems: "end",
    width: 300,
  },
  input: {
    marginRight: theme.spacing(1),
    flex: 1,
    fontFamily: "Shabnam",

  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  show: {
   display: "block",
  },
  hide: {
    display: "none",
  },
 
}));

export default function CustomizedInputBase() {
  const Slist = useRef(null);
  const [displayresult, SetDisplayresult] = useState(false);
  const [timer, setTimer] = useState(null);
  function changeDelay(change) {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(
      setTimeout(() => {
        if(change=="")
        {
          Slist.current.style.display = "none";
        }
        else
        {
          arrayData=arrayData.filter(
            (el, index) =>
            el[index].toLowerCase().includes(change)
          );
          console.log(arrayData);
          Slist.current.style.display = "block";
          
        }
      }, 700 )
    );
  }  
  var className = displayresult ? 'classes.hide' : 'classes.show';

  const classes = useStyles();

  return (
    <div style={{ position:'relative' }}>
      
      <Paper component="text"  className={classes.root}>
        <InputBase
          onChange={(e) => {
            changeDelay(e.target.value);
          }}
          className={classes.input}
          placeholder="جستجو"
          inputProps={{ "aria-label": "search google maps" }}
          color="primary"
        />
        <Divider className={classes.divider} orientation="vertical" />
        <FontAwesomeIcon style={{ marginBottom:10 ,marginLeft:10 }} color="grey" icon={faSearch} />

      </Paper>
      <div ref={Slist} className={className} style={{ display:"none",position:'absolute',top:45,right:0 }}>
         <SearchResults data={arrayData}  />
      </div>
    </div>
  );
}
