import React, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

function LikeBtn() {
  const [likes, setLikes] = useState(0);

  return <FavoriteIcon onClick={() => setLikes(likes + 1)}>{likes}  /</FavoriteIcon>;
}

export default LikeBtn;