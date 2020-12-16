import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../images/image1.PNG'
const useStyles = makeStyles((theme) => ({
  root: {
      marginTop:40,
    flexGrow: 1,
    maxWidth: 600,
    justifyContent:'center',
    textAlign:'left',
    margin:'auto',
    fontWeight:10,
  },
  media: {
    height: 350,
    width:450,
    marginLeft:'120px',
  justifyContent:'end',
  // float:'right',
   textAlign:'end'
  },
}));
function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <Grid container spacing={2}>
        
        <Grid item xs={6} sm={6}>
         
              <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="body4 h1" component="h1">
         <b>Fake Store API</b> 
          </Typography>
          <Typography variant="body4" color="textSecondary" component="h5" >
          Fake store rest API for your e-commerce or shopping website prototype
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} sm={6}>
       
        <CardMedia className={classes.media}
          component="img"
          alt="Shopiing"
          height="140"
          image={image1}
          title="Shop "
        />
      
      </Grid>
      </Grid>
   
    </div>
    )
}

export default Home
