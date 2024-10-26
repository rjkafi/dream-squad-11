
import { useState } from "react";
import Banner from "./components/Banner";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import Header from "./components/Header";
import Players from "./components/Players";
import Selected from "./components/Selecteds/Selected";
import Footer from "./components/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [coins, setCoins] = useState(0); 

  const handleClaimFreeCoin = () => {
    toast.success("Credit Added to your Account")
    setCoins(coins + 6000000); // Update coin count to 6,000,000
  };
  const [isActive,setIsActive]=useState({
     available:true,
     status:"available"
  })
   const handleIsActiveStatus = status =>{
    if(status =="available"){
      setIsActive({
       available:true,
      status:"available"
      })
    }else{
      setIsActive({
        available:false,
     status:"selected"
      })
    }

  }
  const [selectPlayers,setSelectedPlayers]=useState([]);
  const handleToSelectPlayers =( player)=>{
    const isExist = selectPlayers.find(prevSelectPlayer => prevSelectPlayer.playerId === player.playerId)
    if (selectPlayers.length >= 6) {
      toast.warning("You can only select up to 6 players.");
      
  }else if(isExist){
    toast.warning("The player is already selected")
  }
  else if(player.biddingPrice > coins){
    toast.error("Not enough money to buy this player!.Claim the Credit");
  }
  else{
    setCoins(coins - player.biddingPrice); 
    toast.info(`Congrats!! ${player.name} is now in your Squad`);
    const newSelectArr=[...selectPlayers,player];
    setSelectedPlayers(newSelectArr);
  }
    
  }
  const handleRemovePlayer = id =>{
    toast.warning("Player Removed from this Squad")
    // find the player to remove
    selectPlayers.find(player => player.playerId ===id)
    // remove from the select players
    const updatedSelectPlayer =selectPlayers.filter(player =>player.playerId !== id) 
    setSelectedPlayers(updatedSelectPlayer);
    
  }
  // console.log(isActive)
  return (
    <><div className="container mx-auto">
      {/* Header Section */}
      <Header coins={coins}></Header>
      {/* Banner section */}
      <ToastContainer position="top-center" ></ToastContainer>
      <Banner handleClaimFreeCoin={handleClaimFreeCoin}></Banner>
      {/* button container */}
      <ButtonContainer handleIsActiveStatus={handleIsActiveStatus} 
      isActive={isActive}
      selectPlayers={selectPlayers}
      ></ButtonContainer>
      {/* players selection cards section */}
     { isActive.available?  <Players handleToSelectPlayers={handleToSelectPlayers} ></Players>:
     <Selected selectPlayers={selectPlayers} 
     handleRemovePlayer={handleRemovePlayer}
     handleIsActiveStatus={handleIsActiveStatus}
     ></Selected>
     }
      {/* Newslatter section */}
      
    </div>

    {/* Footer section start*/}
    <Footer></Footer>
      </>
  );
};

export default App;