import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid black",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Shabnam",
      cursor: "pointer",
      backgroundColor: selected ? "black" : "",
      color: selected ? "whitesmoke" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "black",
        color: "whitesmoke",
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
