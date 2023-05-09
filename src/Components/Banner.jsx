
const Banner = () => {
    return (
        <div className="bg-[url('./images/banner.png')] bg-center bg-cover h-screen ">
            <div className="h-full flex items-center container mx-auto">
                <div className="md:w-1/2"></div>
                <div className="text-white md:w-1/2">
                    <h2 className="text-5xl mb-4">Would you like a Cup of Delicious Coffee?</h2>
                    <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn btn-warning mt-8">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;