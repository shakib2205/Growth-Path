import img from '../../assets/front 3/contentt.jpg'
const ContentStrategy = () => {
    return (
        <div className="hero bg-base-200 h-[600px] mb-6 py-10">
            <div className="hero-content flex-col lg:flex-row gap-24">
                <div className="text-right">
                    <img
                        src={img}
                        className="h-[370px] w-[550px] shadow-4xl"
                    />
                </div>

                <div className="w-[600px]">
                    <h1 className="text-3xl font-bold uppercase">WHAT DO WE PROVIDE?</h1>
                    <p className="py-6">
                        We’re a collected bunch of individuals with good taste in everything. And that ‘everything’ also includes good taste in reading and that’s what makes us good writers and researchers. So, overall, we are a young and talented bunch of people with a high level of enthusiasm and education working together to deliver businesses more than their expectations.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ContentStrategy;