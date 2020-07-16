import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from '@material-ui/core'

import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
 content: {
     fontSize:'25px',
     textAlign:'center'
 },
 icon:{
     fontSize:'100px'
 }
  });
export default function Contact() {
    const classes = useStyles();
    return (
        <div style={{minHeight:'55vh'}}>
 <Container   maxWidth="lg"  >      
        <Grid container spacing={2} justify="center" >
          <Grid item md={5} lg={5} xl={5} className="logo">
            <img src="https://www.biptrack.com/img/BIPGuy-support.gif" alt="contact" className="responsive" style={{padding:'50px'}}/>
          </Grid>
          <Grid item md={7} lg={7} xl={7} className="logo">
            <p style={{ padding: "50px", margin: "0", textAlign: "center" , borderBottom:'2px solid tomato'}}>
              Contact Us
            </p>
            <p className={classes.content}>
              Follow us on Facebook to get updates:
              <div>
              <a
                  href="https://www.facebook.com/sassybeachwear"
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <FacebookIcon fontSize="large" className={classes.icon} />
                </a>
              </div>
            </p>
            <p className={classes.content}>
              Email us for any questions:
              <div ><a
                  href="mailto:kitty@sassybeachwear.com"
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <EmailIcon fontSize="large" className={classes.icon} />
                </a></div>
             
            </p>
          </Grid>
        </Grid>
    </Container>
        </div>
    )
}
