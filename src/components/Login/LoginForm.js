import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
    } from "@material-ui/core";
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      margin: 'auto',
      justifyContent:'center',
      textAlign:'center'
    }
  }));
export default function LoginForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    alert("Login Successful")
  }; // your form submit function which will invoke after successful validation

  //console.log(watch("username")); // you can watch individual input by pass the name of the input
// console.log(register)
const classes = useStyles();
  return (
      <>
      <Grid container spacing={0} justify="center" direction="row" >
<Grid item>
<Grid
container
direction="column"
justify="center"
spacing={2}
className="login-form"
>
<Paper
variant="elevation"
elevation={2}
className="login-background"
>
<Grid item>
<Typography component="h1" variant="h5">
Sign in
</Typography>
</Grid>
<Grid item>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Grid container direction="column" spacing={2}>
<Grid item>
      <TextField
type="email"
placeholder="Email"
fullWidth
name="username"
variant="outlined"

required
autoFocus
/>
<TextField
type="password"
placeholder="Password"
fullWidth
name="password"
variant="outlined"

required
/>
      {/* {errors.exampleRequired && <p>This field is required</p>} */}
      </Grid>
<Grid item>
      <Button variant="contained" color="primary" disableElevation
>Submit</Button>
</Grid>
</Grid>
    </form>
    </Grid>
<Grid item>
<Link href="#" variant="body2">
Forgot Password?
</Link>
</Grid>
</Paper>
</Grid>
</Grid>
</Grid>

    </>
  );
}