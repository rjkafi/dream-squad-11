/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";


const Players = ({handleToSelectPlayers}) => {
    const [ players,setPlayers]=useState([])
    useEffect(()=>{
        fetch('../../public/players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        <div className="mb-28">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
               
               players.map(player => <div key={player.playerId} className="card bg-base-100  border-2  p-3">
                        <div>
                        <figure>
                          <img
                          className="w-full bg-cover h-[160px] rounded-lg"
                            src={player.image}
                            alt="" />
                        </figure>
                        </div>
                        <div>
                            <div className=" mt-6 mb-4 border-b space-y-3 pb-3">
                               <div className="gap-3 flex justify-start items-center">
                               <i className="fa-solid fa-user text-xl"></i>
                               <h4 className="text-2xl font-semibold text-slate-800">{player.name}</h4>
                               </div>
                               <div className="flex justify-between items-center">
                               <div className=" flex justify-start  gap-2 text-gray-400">
                               <i className="fa-solid fa-flag text-xl"></i>
                               <h5>{player.country}</h5>
                               </div>
                                <button className="btn  text-gray-700 px-2 py-2 border bg-gray-100 rounded-xl font-semibold">{ player.role}</button>
                               </div>
                                
                            </div>
                            
                            <div className="space-y-3">
                                <h5 className="text-slate-900 font-bold">Rating</h5>
                            <div className="flex justify-between items-center">
                              <h4 className="font-semibold text-slate-700">{player.battingType}</h4>
                              <h4 className=" font-semibold text-gray-400">{player.bowlingType}</h4>
                            </div>
                            <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-slate-700">Price:${player.biddingPrice}</h4>
                            <button onClick={() =>handleToSelectPlayers(player)} className="border px-2 py-2 rounded-xl hover:bg-[#E7FE29] active:bg-[#E7FE29]">Choose Player</button>
                            </div>
                            </div>
                           
                        </div>
                        
                      </div>)
                   
            }

           </div>
            
        </div>
    );
};

export default Players;