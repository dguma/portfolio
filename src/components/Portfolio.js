import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Image Gallery",
    description: `Using JavaScript, I have built a web application to allow the 
    user to view several photos and their description. I have styled the site 
    using basic CSS and structured the contents of the site with semantic HMTL.`,
    image: project1,
    url: `https://dguma.github.io/Team-Treehouse-Project-5/`
  },
  {
    name: "Guessing Game",
    description: `Using DOM manipulation, I have created a web game with an 
    interactive experience. The user is required to enter a letter to assume 
    the full word to a mystery sentence. This project uses an equal amount of HMTL, CSS,
    and JavaScript.`,
    image: project2,
    url: `https://dguma.github.io/Team-Treehouse-Project-6/`
  },
  {
    name: "Employee Directory",
    description: `Using an application programming interface, I have gathered a set of 
    random data that shows names, email addresses, and locations of users in an employee directory. 
    Styling the site, I have presented the user with view details of a user.`,
    image: project3,
    url: `https://dguma.github.io/Team-Treehouse-Project-8/`
  },
  {
    name: "Galaga Arcade Replica",
    description: `Incorporating animation, I had created a game that models the classic game Galaga. 
    This game uses JavaScript and DOM manipulation to render movement and animations that show 
    explosions and moving objects.`,
    image: project4,
    url: `https://dguma.github.io/Galaga-Arcade-Game/`
  },
  {
    name: "Marvel Comics API",
    description: `Using React Js and Marvel's API, I had created a SPA that invites the user to browse 
    various comics and characters. This project incorporates Styled Components and other React dependencies.`,
    image: project5,
    url: `https://marvel-comics-project.herokuapp.com/`
  },
  {
    name: "Web Dev Learning Platform",
    description: `Using React Js and Django, I had built a Full-stack application that allows the user 
    to learn the basics of web development. This project uses Django's REST Framework to provide JSON data to the front end.`,
    image: project6,
    url: `https://to-master-dev.herokuapp.com/`
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href={project.url} >Live Demo</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
