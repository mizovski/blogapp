import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { Button } from "@mui/material";



export default function Write() {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [people, setPeople] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      photo,
      username: user.name,
      title,
      category,
      preparationTime,
      people,
      shortDesc,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      <form onSubmit={handleSubmit}>
     <div className="image" 
     onChange={e=>setPhoto(e.target.value)}> 
     </div>
     <div className="title">
     <FormControl sx={{ width: '562px' , height: '40px' }} 
     onChange={e=>setTitle(e.target.value)}>
        <OutlinedInput placeholder="Recipe Title" />
        
      </FormControl>
     </div>
     <div className="category">
     <FormControl sx={{ width: '179px' , height: '40px' }}
     onChange={e=>setCategory(e.target.value)}>

  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={category}
    label="Category"
    
  >
        <MenuItem value={category.breakfast}>Breakfast</MenuItem>
        <MenuItem value={category.brunch}>Brunch</MenuItem>
        <MenuItem value={category.lunch}>Lunch</MenuItem>
        <MenuItem value={category.dinner}>Dinner</MenuItem>
      </Select>
    </FormControl>    
     </div>
     <div className="preparationTime">
       <FormControl onChange={e=>setPreparationTime(e.target.value)}>
     <TextField sx={{ width: '165px' , height: '40px' }}
          id="outlined-number"
          label="Preparation Time"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </FormControl>
     </div>
     <div className="people">
       <FormControl onChange={e=>setPeople(e.target.value)}>
     <TextField id="outlined-basic" label="No. People" variant="outlined" 
     sx={{ width: '165px' , height: '40px' }}/>
     </FormControl>
     </div>
     <div className="shortDesc">
     <FormControl onChange={e=>setShortDesc(e.target.value)}>
     <TextField
     sx={{ width: '562px' , height: '96px' }}
          id="outlined-multiline-flexible"
          label="Short Description"
          multiline
          maxRows={4}
          
          
        />
        </FormControl>
     </div>
     <div className="desc">
     <TextField
     onChange={e=>setDesc(e.target.value)}
     
     sx={{ width: '377px' , height: '284px' }}
          id="outlined-multiline-static"
          label="Recipe"
          multiline
          rows={4}
          defaultValue=""
        />
     </div>
     <div className="button">
     <Button variant="contained" type="submit">Save</Button>
     </div>
     </form>
    </div>
  );
}
