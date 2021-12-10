import { ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const SearchResults = (props) => {
const data = props.data;

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "white",
     
      display: "flex",
      alignItems: "end",
      width: 300,
    },

    searchresult: {
      listStyle: "none",
      padding: 10,
      fontFamily: "Shabnam",
        alignContent: "center",
      width: "100%",
      display: "block",
    },
    padding: {
      paddingTop: 10,
        
      paddingBottom: 10,
      textAlign: "center",
      display: "block",
      width: "100%",
    },
  }));
  const changebackground = (e) => { e.target.style.background = 'whitesmoke'; e.target.style.cursor = 'pointer';};
  const Undo = (e) => { e.target.style.background = 'white'; };
  const [isEmpty, SetisEmpty] = useState(false);
  const classes = useStyles();
  const Listsearch= data.map((item) => {
    return <li onMouseEnter={changebackground} onMouseLeave={Undo} className={classes.padding}>{item}</li>
});
  return (
    <Paper className={classes.root} style={{ color: "black" }}>
        <ul className={classes.searchresult}>
     {Listsearch}
     </ul>
    </Paper>
  );
};

export default SearchResults;
