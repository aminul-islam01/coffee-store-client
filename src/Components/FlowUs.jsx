import cup1 from '../images/cups/Rectangle 9.png'
import cup2 from '../images/cups/Rectangle 10.png'
import cup3 from '../images/cups/Rectangle 11.png'
import cup4 from '../images/cups/Rectangle 12.png'
import cup5 from '../images/cups/Rectangle 13.png'
import cup6 from '../images/cups/Rectangle 14.png'
import cup7 from '../images/cups/Rectangle 15.png'
import cup8 from '../images/cups/Rectangle 16.png'

const FlowUs = () => {
    return (
        <div className='container mx-auto'>
            <p className='text-2xl text-center mt-28'>Follow Us Now</p>
            <h3 className='text-5xl text-center'>Follow on Instagram</h3>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-14 px-5'>
                <img src={cup1} />
                <img src={cup2} />
                <img src={cup3} />
                <img src={cup4} />
                <img src={cup5} />
                <img src={cup6} />
                <img src={cup7} />
                <img src={cup8} />
            </div>

        </div>
    );
};

export default FlowUs;