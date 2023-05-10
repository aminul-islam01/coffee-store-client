import { Link } from "react-router-dom";

const Products = (prop) => {
    const {coffee, handleDeleteCoffee} = prop;
    const { name, chef, photo, _id } = coffee;

    // console.log(coffee)
    return (
        <div className="flex items-center bg-[#F5F4F1]">
            <figure><img src={photo} /></figure>
            <div className="grow">
                <h2 className="">Name: {name}</h2>
                <p>Chef: {chef}</p>
                <p>Chef: {chef}</p>
            </div>
            <div className="card-actions grid grid-flow-row">
                <Link to={`coffee-details/${_id}`}>
                    <button className="btn btn-active">details</button>
                </Link>
                <Link to={`update-coffee/${_id}`}>
                    <button className="btn">update</button>
                </Link>
                <button onClick={() => handleDeleteCoffee(_id)} className="btn">delete</button>
            </div>
        </div>
    );
};

export default Products;