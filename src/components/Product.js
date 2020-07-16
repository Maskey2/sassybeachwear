import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    
    root: {
      maxWidth: 345,
    },
    paper: {
      padding: "10px",
      textAlign: "center",
    },
    tier: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    button: {
      color: "white",
      justifyContent: "center",
      backgroundColor: "#091a2d",
      fontSize:'18px',
      border:'none',
      padding:'10px'
    },
    link: {
      textDecoration: "none",
    },
    cardMedia2: {
      maxHeight: "200px",
    },
  });
export default function Product() {
    const classes = useStyles();
    return (
        <div style={{minHeight:'55vh'}}>
            
        </div>
    )
}
