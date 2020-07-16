import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";

function Copyright() {
  return (
    <Typography component={"span"} variant="body2" style={{ color: "#ffffff" }}>
      <Box display={{ xs: "block", sm: "none" }}>
        <br />
      </Box>
      {"Copyright ©     "}
      Sassy Beachwear
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  headerlink: {
    textDecoration: "none",
    fontFamily: 'Delius Swash Caps',
    color: "white",
    fontSize: "25px",
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "20px",
    lineHeight: "1.5",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
 icon:{
   fontSize:'50px'
 }
}));

const handleClick = (event) => {
  scroll.scrollToTop();
};

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid style={{ backgroundColor: "tomato", bottom:'0'}}>
      <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3} md={4} lg={4}>
            <Typography component={"span"} className={classes.headerlink}>
              Sassy Beachwear
            </Typography>
            <ul>
              <Link to="/" className={classes.link} onClick={handleClick}>
                <li>Home </li>
              </Link>
              <a href="/#about" className={classes.link}>
                <li>About </li>{" "}
              </a>
              <a href="/#contact" className={classes.link}>
                <li>Contact </li>{" "}
              </a>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3} md={4} lg={4}>
            <Typography
              component={"span"}
              gutterBottom
              className={classes.headerlink}
            >
              Check out our
            </Typography>
            <ul>
              <Link to="/products" className={classes.link}>
                <li>Products </li>
              </Link>
              <Link to="/customers" className={classes.link}>
                <li>Customers </li>
              </Link>
              <Link to="/contact" className={classes.link}>
                <li>Contact </li>
              </Link>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography
              component="h2"
              className={classes.headerlink}
              style={{
                paddingLeft: "5px",
                paddingBottom: "5px",
                fontSize: "22px",
              }}
            >
              Follow us in our Social Media
            </Typography>
            <Typography
              component={"span"}
              className={classes.link}
              style={{ padding: "5px" }}
            >
              <div>
                <a
                  href="https://www.facebook.com/sassybeachwearontheboardwalk"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  <FacebookIcon  className={classes.icon} />
                </a>                
                <a
                  href="mailto:kitty@sassybeachwear.com"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  <EmailIcon className={classes.icon} />
                </a>
              </div>
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
        <Grid style={{ paddingBottom: "30px" }}></Grid>
      </Container>
    </Grid>
  );
}
