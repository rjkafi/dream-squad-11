

// eslint-disable-next-line react/prop-types
const Header = ({coins}) => {
    return (
        <div>
    <div className="navbar bg-base-100  py-5 ">
  <div className="flex-1">
    <a href=""><img className="w-[70px] h-[70px]" src={'https://i.ibb.co.com/wg4Cjg7/logo.png'} alt="" /></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-slate-500 items-center">
      <li><a href="">Home</a></li>
      <li><a href="">Fixture</a></li>
      <li><a href="">Team</a></li>
      <li><a href="">Schedules</a></li>
      <li><button className="text-slate-800 font-semibold border py-3">
        <span> {coins}</span>
        <p>Coin</p>
        <img className="w-5 h-5" src="https://img.icons8.com/?size=96&id=sPBQkuep9vDA&format=png" alt="" />
        </button></li>
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;