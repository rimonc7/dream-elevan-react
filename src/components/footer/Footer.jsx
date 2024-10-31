import footerLogo from "../../assets/logo-footer.png"
import './footer.css'
const Footer = () => {
    return (
        <div className="relative mt-52">
            <div className="bg-white bg-opacity-25 border-2 border-gray-400 p-1 rounded-xl mx-4 lg:mx-32 absolute inset-x-0 -top-60 mt-20 ">
                <div className="m-4 bg-white py-20 rounded-xl text-center bg-gradient-to-r from-green-50 to-amber-100">
                    <h3 className="font-bold text-3xl">Subscribe to our Newsletter</h3>
                    <p className="text-gray-400 my-3"><small>Get the latest updates and news right in your inbox!</small></p>
                    <input className="p-2 rounded-lg border-2 border-gray-400 mr-2" type="text" placeholder="Enter Your Email" />
                    <button className="p-2 btn-color rounded-lg">Subscribe</button>
                </div>
            </div>
            <div className="bg-[#04081D] pt-60">
                <img className="mx-auto mb-16" src={footerLogo} alt="" />
                <div className="lg:flex justify-between text-white mx-5 lg:mx-36 text-center lg:text-start">
                    <div>
                        <h3 className="font-semibold text-xl mb-3">About Us</h3>
                        <p className="lg:max-w-40"><small>We are a passionate team dedicated to providing the best services to our customers.</small></p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl lg:mb-3 my-3">Quick Links</h3>
                        <ul className=" lg:text-center">
                            <li> <small>Home</small></li>
                            <li> <small>Service</small></li>
                            <li><small>Contact</small></li>
                            <li><small>About</small></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl lg:mb-3 my-3">Subscribe</h3>
                        <p className="mb-3" ><small>Subscribe to our newsletter for the latest updates.</small></p>
                        <input className="p-2 rounded-lg" type="text" placeholder="Enter Your Email" /> <button className="p-2 btn-color rounded-lg" >Subscribe</button>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-white text-center py-5 border-t-2 border-gray-500"> <small>@2024 Your Company All Rights Reserved.</small> </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;