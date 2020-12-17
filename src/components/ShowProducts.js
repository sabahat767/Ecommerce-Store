import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      width: 250,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
function ShowProduct({product}) {
    const classes = useStyles();
    return (
        
        <Card key={product.id} className={classes.root}>

        <Typography variant="h5" component="h2">
        {product.category}
        </Typography>
        <div><img width='100px' height='100px' src={product.image}></img></div>
        
        <Button variant="contained" color="primary" >Buy Now</Button>
       
        </Card>
)
}

export default ShowProduct