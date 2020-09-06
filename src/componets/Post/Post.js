import React from 'react';
import Button from '@material-ui/core/Button';
import './Post.css'
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      margin: theme.spacing(2),
    },
    
  }));

const Post = (props) => {
    const { title, body, id } = props.post;
    const classes = useStyles()
  
    return (
        <div className={classes.root}>
             <Grid container spacing={2}>
        <Grid item xm={8}>
          <Paper  className={classes.paper}>  <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/details/${id}`}>
                <Button variant="contained" color="primary"> see more </Button>
            </Link>
            </Paper>
        </Grid>
        </Grid>
          

        </div>
    );
};

export default Post;