import React from 'react';
import { Link } from 'react-router-dom';
import DATA from '../data.json';


function ShowLink(){
   return  DATA.data.map((item, i) => {
     return <div style={{ margin:"10px"}}>
              <Link to={item.url}>
                {item.name}
              </Link>
            </div>
   })
}
export default function Homepage(){
  return <div className="container text-center">
           <h1 style={{ fontWeight:"800", marginTop:"30px", marginBottom:"30px"}}>NAPSTERS</h1>
           <div className="mt-5 mb-5">
              <h5>NAMAN CHAUDHARY</h5>
              <h5>RITIK KAUSHIK</h5>
           </div>
           {ShowLink()}
         </div>
}
