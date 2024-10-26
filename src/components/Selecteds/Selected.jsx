import PropTypes from 'prop-types'
import Select from '../Select/Select';



// eslint-disable-next-line react/prop-types
const Selected = ({selectPlayers,handleRemovePlayer,handleIsActiveStatus}) => {
   
    return (
        <div className='pb-20'>
            {/* <h4>Selectde player:{selectPlayers.length}</h4> */}
            <div >
                {
                  selectPlayers.map(select => <Select key={select.playerId}
                     select={select}
                     handleRemovePlayer={handleRemovePlayer}
                     ></Select>)  
                }
            </div>
            <button onClick={()=>handleIsActiveStatus("available")}  className='btn bg-[#E7FE29]'>Add More Player</button>
        </div>
    );
};
Selected.propTypes={
    selectPlayers:PropTypes.array
}
export default Selected;