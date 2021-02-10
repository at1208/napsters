import React from 'react';
import DATA from '../data.json';


export default function Dynamic({ match }){
   let article = DATA.data.filter(item => item.url === match.url )

  return <div className="text-center container">
             <h1 style={{ marginTop:"20px", fontWeight:"800"}}>{article[0].title}</h1>
             <p style={{ fontSize:"20px", marginTop:"40px"}}>{article[0].content}</p>
         </div>
}
