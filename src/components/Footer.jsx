

const Footer = () => {
    return (
        <div>
          {/* NewsLetter Card  */}
          <div className="absolute p-5 border rounded-md container -mt-16 z-[100]
           left-1/2 transform -translate-x-1/2">
            <div className=" mx-auto text-center border bg-gradient-to-r from-sky-100 to-amber-100 rounded-md">
              <div className="space-y-4 py-8">
                <h3 className="text-3xl font-bold">Subscribe to our Newsletter</h3>
                <h5 className="text-xl font-medium text-gray-500">Get the latest updates and news right in your inbox!</h5>
                 <input type="text" className="input input-bordered " placeholder="Enter your email" />
                <button className="btn ml-2 bg-gradient-to-r from-fuchsia-500 to-amber-500">Subscribed</button> 
               </div>
            </div>

          </div>
    <div className="bg-[#0c1131] pt-60 pb-16">
    <img className="mx-auto w-[120px]" src={'https://i.ibb.co.com/wg4Cjg7/logo.png'} alt="" />
    <footer className="footer  text-base-content py-6 container m-auto">
  <nav className="w-4/12 p-3">
    <h6 className="footer-title text-white text-xl">About Us</h6>
    <p className="text-white">We are a passionate team dedicated to providing the best services to our customers.</p>
    
  </nav>
  <nav>
    <h6 className="footer-title text-white text-xl">Quick Links</h6>
    <li className="text-white"><a className="link link-hover">Home</a></li>
    <li className="text-white"><a className="link link-hover">Services</a></li>
    <li className="text-white"><a className="link link-hover">About</a></li>
    <li className="text-white"><a className="link link-hover"> contact</a></li>
  </nav>
 
  <form>
    <h6 className="footer-title text-white">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Subscribe to our newsletter for the <br /> latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item bg-gradient-to-r from-amber-500 to-fuchsia-500">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>

</div>
    <footer className="footer footer-center bg-[#0c1131] text-white p-5 border-t ">
  <aside>
    <p className="">Copyright © {new Date().getFullYear()} - All right reserved </p>
  </aside>
</footer>     
 </div>
    ); 
};

export default Footer;