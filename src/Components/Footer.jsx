import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import logo from '../images/logo1.png'

const handleSendMessage = event => {
    event.preventDefault();
}

const Footer = () => {
    return (
        <div className="bg-[url('./images/footerbg.jpg')] ">
            <div className='container mx-auto px-5'>
                <img className='w-20 mb-6 pt-10' src={logo} />
                <div className=' grid md:grid-cols-2 gap-10'>
                    <div>
                        <h4 className="text-4xl font-semibold">Espresso Emporium</h4>
                        <p className='my-8'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex gap-4'>
                            <a className='text-4xl'><FaFacebook></FaFacebook></a>
                            <a className='text-4xl'><FaTwitter></FaTwitter></a>
                            <a className='text-4xl'><FaInstagram></FaInstagram></a>
                            <a className='text-4xl'><FaLinkedin></FaLinkedin></a>
                        </div>
                        <h4 className='text-4xl font-semibold my-6'>Get in Touch</h4>
                        <div className='flex items-center gap-4 mb-4'>
                            <FaPhoneAlt></FaPhoneAlt>
                            <a >+88 0123456789</a>
                        </div>
                        <div className='flex items-center gap-4 mb-4'>
                            <FaMailBulk></FaMailBulk>
                            <a >info@gmail.com</a>
                        </div>
                        <div className='flex items-center gap-4 mb-4'>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                            <a >72, Wall street, King Road, Dhaka</a>
                        </div>
                    </div>
                    <form onSubmit={handleSendMessage}>
                        <h4 className="text-4xl font-semibold mb-8">Connect with Us</h4>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full mb-4" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full mb-4" />
                        <textarea className="resize-none w-full mb-6 p-4" name="message" id="" rows="5" placeholder="Message"></textarea>
                        <button type='submit' className="btn btn-outline rounded-full mb-5">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;