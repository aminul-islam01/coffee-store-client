import logo from '../images/logo1.png'
const NavigationBar = () => {

    return (
        <div className="navbar bg-pink-950 ">
            <div className="flex mx-auto">
                <div className="w-10 rounded-full">
                    <img src= {logo}/>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-white">Espresso Emporium</a>
            </div>
        </div>
    );
};

export default NavigationBar;