import React, { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import Commentes from '../Commentes/Commentes';
import './PostDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faUser } from '@fortawesome/free-solid-svg-icons'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
       avatar: {
      backgroundColor: red[500],
    },
  }));




const PostDetails = () => {
    const {showDetails} = useParams();
    const [post, setPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${showDetails}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])

    
   
        const [comment, setComment] = useState([]);
        useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${showDetails}`)
            .then(res=>res.json())
            .then(data=>setComment(data))
        },[])

    
       

    const { title, body } =post;
    const classes = useStyles();


    return (
        <div>
                 <Card>
                 <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <FontAwesomeIcon icon={faUser} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={title}
        subheader="September 8, 2020"
      />
        <CardContent>
        <Typography color="textPrimary" component="p">
      <b> {body}</b>
        </Typography>
      </CardContent>     
            </Card>
            
            <div>
                <h3> <FontAwesomeIcon icon={faComments} />Comment  </h3>
              
               {
                   comment.map(pt=> <Commentes pt={pt}></Commentes>)
                  
               }
              
            
            </div>
            {/* <div>
                <Commentes></Commentes>
            </div> */}
         
         </div>
    );
};

export default PostDetails;