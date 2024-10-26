import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Select = ({select,handleRemovePlayer}) => {
    const {name,image,role,biddingPrice,playerId}=select
    return (
        <div className='border m-4 p-4 rounded-md'>
            <div className='flex justify-between items-center'>
            <div className='flex justify-start gap-3 items-center '>
                <div className=' w-[90px] rounded-md'><img className='rounded-md' src={image} alt="" /></div>
                <div>
                    <h3 className='text-2xl font-semibold'>{name}</h3>
                    <h4 className='text-gray-400 text-lg'>{role}</h4>
                    <h5 className='text-gray-400'>${biddingPrice}</h5>
                </div>
            </div>
            <div>
            <button onClick={()=>handleRemovePlayer(playerId)} className='cursor-pointer'><i className="fa-solid fa-trash text-xl text-red-300"></i></button>
            </div>
            </div>
        </div>
    );
};
Select.propTypes={
    select:PropTypes.object
}
export default Select;