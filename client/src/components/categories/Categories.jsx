import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Categories() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="categories">
         
       {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            {c.name}
            </Link>
          ))}
        
      </div>
      
    
  );
}
