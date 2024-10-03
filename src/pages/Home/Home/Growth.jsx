import image from '../../../assets/front 3/growth.jpeg'
const Growth = () => {
    return (
        <div>
        <div className="hero bg-base-200 py-6">
            <div className="hero-content flex-col lg:flex-row-reverse gap-24">
                <div className="text-right">
                    <img
                        src={image}
                        className="max-w-md shadow-4xl"
                    />
                </div>

                <div className="w-[600px]">
                    <h1 className="text-4xl font-bold uppercase">Our Aproach</h1>
                    <h3 className='text-2xl text-blue-700 py-6'>Growth Path</h3>
                    <p className="py-6">
                    When it comes to writing, our writers don’t follow any specific rules (expectations include originality and a deadline). However, we do have a process that every writer at Growth Guide goes through that is common for our staff to work with.
                    </p>
                </div>

            </div>
        </div>
        
    </div>
    );
};

export default Growth;