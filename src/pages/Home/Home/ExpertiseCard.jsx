
const ExpertiseCard = ({ item }) => {
    const { name, details, images, url } = item;
    return (
        <div className="relative ml-10">
            <div className="card bg-base-100 w-96 h-[400px] mb-6 shadow-xl overflow-hidden group">
                <figure className="">
                    <img
                        src={images}
                        alt={name}
                        className="rounded-xl"
                    />
                </figure>
                <div className="card-body bg-white items-center text-center transform transition-transform duration-300 group-hover:-translate-y-20">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-xl"
                    >
                        {name}
                    </a>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default ExpertiseCard;
