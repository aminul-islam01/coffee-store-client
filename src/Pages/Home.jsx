import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import BannerBottom from "../Components/BannerBottom";
import FlowUs from "../Components/FlowUs";
import Products from "../Components/Products";
import { FaCoffee } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    const handleDeleteCoffee = (id) => {
        fetch(`http://localhost:5000/coffees/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = coffees.filter(coffee => coffee._id !== id);
                    setCoffees(remaining);
                    alert('delete successfully');
                }
            })
    }

    return (
        <div>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <div className="container mx-auto">
                <div className="text-center mt-28">
                    <p className="text-2xl">---Sip & Savor---</p>
                    <h3 className="text-5xl">Our Popular Products</h3>
                    <Link to='add-coffee'>
                        <button className="btn btn-warning mt-4 mb-10">
                            Add Coffee <FaCoffee className="text-2xl ms-2"></FaCoffee></button>
                    </Link>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                    {
                        coffees.map(coffee => <Products
                            key={coffee._id}
                            coffee={coffee}
                            handleDeleteCoffee={handleDeleteCoffee}></Products>)
                    }
                </div>
            </div>
            <FlowUs></FlowUs>
        </div>
    );
};

export default Home;