import "./post.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import LikeBtn from "../counter/LikeBtn";
import Likes from "../counter/counter";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";






export default function Post({ post }) {
  const PF = "http://localhost:5000/images";
  
  
  
  
  return (
    <div className="post">
      
      <Link to={`/post/${post._id}`} className="link">
      
        
      <Card sx={{ maxWidth: 345 }}>
     
      <CardMedia
        component="img"
        height="194"
        image={post.photo && <img src={PF + post.photo} 
        alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Ffood%2F2021%2Foct%2F08%2Fred-wall-food-serving-up-our-class-differences-on-a-plate&psig=AOvVaw2ptZ_S0rf_h0nNt-xDAHVO&ust=1643836644080000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiTrZC33_UCFQAAAAAdAAAAABAD"/>}
        
      />
      <CardContent>
        <Typography variant="body1" color="orange" fontSize="2rem"> 
        {post.title}  
        </Typography>
         
        <Typography variant="body2" color="text.secondary">
          {post.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <RestaurantIcon color="action"/>
        </IconButton>
        <IconButton>
          <AccessTimeIcon  color="action"/>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <LikeBtn />
          <Likes />
        </IconButton>
        <IconButton >
          <ReadMoreIcon  fontSize="large"  />
        </IconButton>
      
      </CardActions>
     
    </Card>
    </Link>
    
    </div>
  );
}
