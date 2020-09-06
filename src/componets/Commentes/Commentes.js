import React from 'react';
import './Commentes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEnvelope, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { green, lightBlue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({
    avatar: {
   backgroundColor: green[500],
 },
color:{
     color: lightBlue[500],
},
}));


const Commentes = (props) => {
   const {email, name, body} =props.pt;
   const classes = useStyles();

  
  
 
//   const pt= props.photo.map(photo=>photo)  ;
    return (
      <Card className='comment-pattern'>
                  <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <FontAwesomeIcon icon={faUserAlt} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        className={classes.color}
        title={name}
      />

        
                <h6  className={classes.color}> <FontAwesomeIcon icon={faEnvelope} /> {email}</h6>
                <p className='comment'> <FontAwesomeIcon icon={faComment} /> {body}</p>

      </Card>
      
    );
};

export default Commentes;