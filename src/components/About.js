import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Bg from "./../assets/bg.jpg";

const useStyles = makeStyles((theme) => ({
  content: {
    fontSize: "37px",
    [theme.breakpoints.down("md")]: {
      fontSize: "23px",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (

    
    <Container
      maxWidth="xl"
      style={{ height: "100vh", backgroundColor: "#e4e4e4", display: "flex", alignItems: "center" }}
    >      
        <Grid container spacing={2} justify="center" >
          <Grid item md={5} lg={5} xl={5} className="logo">
            <p style={{ padding: "50px", margin: "0" }}> </p>
          </Grid>
          <Grid item md={7} lg={7} xl={7} className="logo">
            <p style={{ padding: "50px", margin: "0", textAlign: "center" }}>
              About Us
            </p>
            <p className={classes.content}>
              We are Sassy people located at Ocean City, Maryland since 1997. We
              serve the best air to Sassy people. Oh about the products, we have
              been selling the Custom made T-shirts, and all the beach
              accessories with sass.
            </p>
          </Grid>
        </Grid>
    </Container>
  );
}
