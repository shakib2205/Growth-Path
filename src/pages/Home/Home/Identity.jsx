import { Link } from "react-router-dom";
import image from '../../../assets/front2/img.jpeg'

const Identity = () => {
    return (
        <div>
            <div className="hero bg-base-200 py-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-24">
                    <div className="text-right">
                        <span className="mb-4 block">We think you’ll love working with us.</span>
                        <img
                            src={image}
                            className="max-w-md shadow-4xl"
                        />
                    </div>

                    <div className="w-[600px]">
                        <h1 className="text-5xl font-bold uppercase">WHO ARE WE?
                            A Premium Content Writing Service Provider</h1>
                        <p className="py-6">
                            We’re a collected bunch of individuals with good taste in everything. And that ‘everything’ also includes good taste in reading and that’s what makes us good writers and researchers. So, overall, we are a young and talented bunch of people with a high level of enthusiasm and education working together to deliver businesses more than their expectations.
                        </p>
                        <Link className="btn btn-outline">Learn More</Link>
                    </div>

                </div>
            </div>
            <div className="bg-yellow-400 h-24 uppercase text-center flex items-center justify-center">
                <p className="text-black tracking-widest">content writing / creative writing / web development / graphics / digital marketing / seo</p>
            </div>

        </div>
    );
};

export default Identity;