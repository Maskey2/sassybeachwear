import Container from "@material-ui/core/Container";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";


const tiers = [
  {
    src: require("../assets/t.jpg"),
    backsrc: require("../assets/toe.jpg"),
    title: "Custom T-shirts",
    subtitle: "Hilarious Decal Custom Shirts",
    path: "/design&develop",
  },
  {
    src: require("../assets/bag.jpg"),
    backsrc: require("../assets/t.jpg"),
    title: "Beach Bags",
    subtitle: "Maryland Flag BeachBags",
    path: "/manufacture",
  },
  {
    src: require("../assets/toe.jpg"),
    backsrc: require("../assets/bag.jpg"),
    title: "Toe Rings",
    subtitle: "High Quality Seamless Toerings",
    path: "/distribute",
  },
  {
    src: require("../assets/t.jpg"),
    backsrc: require("../assets/toe.jpg"),
    title: "Boogie Boards",
    subtitle: "Hilarious Decal Custom Shirts",
    path: "/design&develop",
  },
  {
    src: require("../assets/bag.jpg"),
    backsrc: require("../assets/t.jpg"),
    title: "Beach Wears/ Dresses",
    subtitle: "Maryland Flag BeachBags",
    path: "/manufacture",
  },
  {
    src: require("../assets/t.jpg"),
    backsrc: require("../assets/toe.jpg"),
    title: "Souvenirs",
    subtitle: "Hilarious Decal Custom Shirts",
    path: "/design&develop",
  },
  {
    src: require("../assets/bag.jpg"),
    backsrc: require("../assets/t.jpg"),
    title: "Hair Braids",
    subtitle: "Maryland Flag BeachBags",
    path: "/manufacture",
  },
  {
    src: require("../assets/toe.jpg"),
    backsrc: require("../assets/bag.jpg"),
    title: "Henna Tattoo",
    subtitle: "High Quality Seamless Toerings",
    path: "/distribute",
  },
];

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

export default function Content() {
  const classes = useStyles();

  return (
    <div>
      {/* large view */}
      <Box display={{ xs: "none", sm: "block" }}>
      
        <Container
          maxWidth="lg"
          component="main"
          id="content"
          style={{ marginTop: "80px" }}
        >
            <p style={{fontSize:'50px'}} align="center">We Have</p>
          <Grid
            container
            spacing={3}
            alignItems="flex-end"
            style={{ marginBottom: "20px" }}
          >
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} md={3} sm={6}>
                <Flippy
                  flipOnHover={true} // default false
                  flipOnClick={false} // default false
                  flipDirection="horizontal"
                >
                  <FrontSide style={{padding:'0'}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt=""
                        height="340"
                        image={tier.src}
                      />
                      
                    </CardActionArea>
                  </FrontSide>
                  <Link to={tier.path} className={classes.link}>
                    <BackSide
                      style={{ backgroundImage: `url(${tier.backsrc})` }}
                    >
                      <div style={{ marginTop: "18%" }}>
                        <CardContent>
                          <Typography component="h2"
                            align="center"
                            style={{
                              color: "#091a2d",
                              fontSize: "26px",
                              backgroundColor: "white",
                              height: "130px",
                              padding: "10px",
                            }}
                          >
                            {tier.subtitle}{" "}
                          </Typography>
                        </CardContent>
                        
                      </div>
                    </BackSide>{" "}
                  </Link>
                </Flippy>
                <p align="center" style={{fontSize:'30px'}}>{tier.title}</p>
              </Grid>
            ))}
          </Grid>
        </Container>
       
      </Box>

      {/* mobile */}
      <Box display={{ xs: "block", sm: "none" }}>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <p style={{fontSize:'40px'}} align="center">We Have</p>
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            {tiers.map((card) => (
              <Grid item key={card} xs={6}>
                <Card className={classes.card}>
                  <CardMedia
                    component="img"
                    className={classes.cardMedia2}
                    image={card.src}
                  />                  
                </Card>
                <p align="center" style={{fontSize:'15px'}}>{card.title}</p>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
