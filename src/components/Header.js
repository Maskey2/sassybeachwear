import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    display:'inline',
    fontSize:'25px',
    padding:'10px',
    color:'white',
    textDecoration:'none'
  }
});
export default function Header() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" style={{ padding:"0", margin:'0'}}>
      <Grid container spacing={2} justify="center" alignItems="center"  style={{backgroundColor:'tomato', }}>
        <Grid item  md={3} lg={3} xl={3} className="logo" >
           <p style={{padding:'8px', margin:'0'}}> Sassy Beachwear</p>
        </Grid>
        <Grid item  md={3} lg={3} xl={9}  className="logo" align="right"> 
        <Link to="/" className={classes.link}>Home  </Link> 
         <Link to="/products" className={classes.link}>Products</Link> 
         <Link to="/customers" className={classes.link}>Customers </Link> 
         <Link to="/contact" className={classes.link}>Contact  </Link>       
        </Grid>
      </Grid>
      
    </Container>
  );
}
