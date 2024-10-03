import img1 from '../../../assets/front1/img1.webp'
import img2 from '../../../assets/front1/img2.webp'
import img3 from '../../../assets/front1/img3.png'
import img4 from '../../../assets/front1/img4.jpeg'

const OurVenture = () => {
    return (
        <div className='mb-6'>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="max-w-fit">
                        <h2 className="font-bold">AN
                            <br />
                            <span className="text-4xl text-yellow-500">IT AND RESEARCH</span>
                            <br />
                            COMPANY</h2>
                        <p className="uppercase text-sm">that makes Products and Market Places Based on Artificial Intelligence and Machine Learning</p>
                    </div>
                    <div className="pl-10">
                        <h1 className="text-2xl font-bold text-center">OUR VENTURES</h1>
                        <div className=" grid grid-cols-2 w-[700px] py-8 px-6">
                            <div className='flex'>
                                <img className='size-10 mr-4 rounded' src={img1} alt="" />
                                <h2><span className="text-2xl text-green-500 uppercase">Growth Path Publishing Hub</span> <br />Specializing in academic book publishing, including children’s books. Get expert services to publish high-quality, engaging educational content for young readers.</h2>

                            </div>
                            <div className='flex'>
                                <img className='size-10 mr-4 rounded' src={img2} alt="" />
                                <h2>
                                    <a className='text-orange-600 text-2xl' href="https://thesurveytime.com/">THE SURVEY TIME</a>
                                    <br />
                                    <span>Get your surveys filled via survey swapping. Post surveys, earn credits, or purchase credits to reach eligible respondents and boost participation efficiently.</span>
                                </h2>

                            </div>


                        </div>
                        <div className=" grid grid-cols-2 w-[700px] py-6 px-6">
                            <div className='flex'>
                                <img className='size-10 mr-4' src={img3} alt="" />
                                <h2>
                                    <a className='text-blue-600 text-2xl' href="https://grljournals.in/">GRLGOURNALS</a>
                                    <br />
                                    <span>Global Research Letters (GRL) is an internationally recognised research journal dedicated to providing the best possible open access publishing service to the academia & research community.</span>
                                </h2>

                            </div>
                            <div className='flex'>
                                <img className='size-10 mr-4 rounded' src={img4} alt="" />
                                <h2>
                                    <a className='text-purple-400 text-2xl' href="https://schooldhundo.com/">SCHOOLDHUNDO</a>
                                    <br />
                                    <span>India’s leading information portal with contact details for over 80,000 schools nationwide, sorted by state, city, and board. Find your ideal school today!</span>
                                </h2>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurVenture;