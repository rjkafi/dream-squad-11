/* eslint-disable react/prop-types */

import '../ButtonContainer/ButtonContainer.css'
const ButtonContainer = ({handleIsActiveStatus,isActive,selectPlayers}) => {
    // console.log(handleIsActiveStatus)
    console.log(isActive)
    return (
        <div className='my-8'>
            <div className="flex justify-between px-2">
                <h4  className="text-3xl font-bold text-slate-800">{isActive.available ? "Available Players" : `Selected Players (${selectPlayers.length}/6)`}
                </h4>
                <div className="toogle flex">
                    <div onClick={()=>handleIsActiveStatus("available")}
                     className={`${isActive.available? "btn active": "btn"}`}>Available</div>
                    <div onClick={()=>handleIsActiveStatus("selected")} 
                         className={`${isActive.available? "btn  ": "btn active "}`}
                        >Selected ({selectPlayers.length})</div>

                </div>
            </div>
        </div>
    );
};

export default ButtonContainer;