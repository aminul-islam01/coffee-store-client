
const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo };

        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        // console.log(newCoffee)
    }

    return (
        <div className='bg-[#F4F3F0] p-10'>
            <h1 className='text-4xl text-center'>Add New Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                <div className='md:flex gap-5 justify-between mb-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">Chef</span>
                        </label>
                        <input type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered" />
                    </div>
                </div>
                <div className='md:flex gap-5 justify-between mb-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">Suppier</span>
                        </label>
                        <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">Taste</span>
                        </label>
                        <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered" />
                    </div>
                </div>
                <div className='md:flex gap-5 justify-between mb-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">Category</span>
                        </label>
                        <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">Details</span>
                        </label>
                        <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text text-2xl font-semibold">Photo</span>
                    </label>
                    <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered" />
                </div>
                <input className="btn btn-error bg-[#D2B48C] w-full" type="submit" value="Add Coffee" />
            </form>
        </div>
    )
};

export default AddCoffee;