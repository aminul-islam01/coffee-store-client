import logo1 from '../images/icons/1.png'
import logo2 from '../images/icons/2.png'
import logo3 from '../images/icons/3.png'
import logo4 from '../images/icons/4.png'
const BannerBottom = () => {
    return (
        <div className='bg-[#ECEAE3]'>
            <div className='container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-14 px-5 mx-auto'>
                <div>
                    <img src={logo1} />
                    <h4 className='text-3xl mt-4 mb-2'>Awesome Aroma</h4>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={logo2} />
                    <h4 className='text-3xl mt-4 mb-2'>High Quality</h4>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img src={logo3} />
                    <h4 className='text-3xl mt-4 mb-2'>Pure Grades</h4>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img src={logo4} />
                    <h4 className='text-3xl mt-4 mb-2'>Proper Roasting</h4>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;