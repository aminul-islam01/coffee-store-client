import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { name, chef, supplier, taste, category, details, photo } = coffee;
    return (
        <div className=" container mx-auto">
            <Link to='/' className="my-12 inline-block flex items-center">
                <FaArrowLeft></FaArrowLeft> <span className="text-2xl font-bold ms-2">Back to home</span></Link>
            <div className=" md:flex gap-10 bg-[#F4F3F0] mb-28 p-10">
                <img src={photo} />
                <div className="card-body">
                    <h2 className="card-title font-mono">Niceties</h2>
                    <p><span className="font-bold">name:</span> {name}</p>
                    <p><span className="font-bold">chef:</span> {chef}</p>
                    <p><span className="font-bold">supplier:</span> {supplier}</p>
                    <p><span className="font-bold">taste:</span> {taste}</p>
                    <p><span className="font-bold">category:</span> {category}</p>
                    <p><span className="font-bold">details:</span> {details}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;