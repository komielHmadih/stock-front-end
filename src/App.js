import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import SahmPage from './Pages/SahmPage';
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#f3f4f8",
    color: "black",
    minHeight: "100vh",
    maxWidth: "100vw",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/sahm" component={SahmPage} exact />
        {/* <Route path="/sahm/:id" component={CoinPage} exact /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
