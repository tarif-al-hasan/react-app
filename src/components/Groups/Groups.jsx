import React from "react";
import { Link } from "react-router-dom";
import Data from "./data";
const Groups = () => {
  return (
    <>
       <div className="row mt-5">
       {Data.map(item=>(
           <div className="col-12 mb-5">
           <h2 className="mt-0 mb-3">
             <img
               className="results-group-icon mr-1"
               src={item.image}
               alt="WhatsApp"
             />
             <Link to={item.link} className="group_title" title="WhatsApp">
               {item.title}
             </Link>
           </h2>
           {item.tag.map(tag=>(
             <a href="/whatsapp/anime/" title="Anime" className="btn btn-light m-1">
            {tag}
           </a>
           ))}
         </div>
       ))}
    </div>
    </>
  );
};

export default Groups;
