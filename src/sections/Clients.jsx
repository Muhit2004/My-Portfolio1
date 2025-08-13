import React from 'react'
import {clientReviews} from "../constants/index.js";

const Clients = () => {
    return (
       <section className="c-space my-20 ">
       <h3 className="head-text">Hear from my Clients</h3>

           <div className="client-container">
               {clientReviews.map(({ id, name, review, img, position }) => (
                   <div key={id} className="client-review">
                       <p className="text-white font-light">{review}</p>
                       <div className="client-content">
                           <div className="flex gap-3 items-center">
                               <img src={img} alt={name} className="w-12 h-12 rounded-full" />
                               <div className="flex flex-col">
                                   <p className="text-white-800 font-semibold leading-tight">{name}</p>
                                   <p className="text-white-500 text-sm leading-tight
                                   md-text-base font-semibold">{position}</p>
                               </div>
                           </div>
                           <div className="flex self-end items-center gap-2">
                               {Array.from({length:5}).map((_,index) =>(
                                   <img src="/assets/star.png" alt="star" key={index}
                                        className="w-5 h-5 " />
                               ))}
                           </div>
                       </div>
                   </div>
               ))}


           </div>
       </section>
    )
}
export default Clients
