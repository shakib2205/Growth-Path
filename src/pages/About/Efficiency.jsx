import { faDollar, faFile, faHandshake, faLaptopFile, faShareFromSquare, faTimeline, faTimes, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Efficiency = () => {
    return (
        <div className="ml-8">
            <div className="py-8">
                <p className="text-center text-2xl font-bold">Why People Trust Us <br />
                    The Best Things About Us As Content Writing Agency</p>
            </div>
            <div className="grid grid-cols-3 py-4 px-4">
                <div className="card bg-base-100 w-96 mb-4">
                    <div className="card-body text-center">
                        <FontAwesomeIcon className="text-5xl" icon={faLaptopFile} />
                        <h2 className="text-center py-4 uppercase">Educated</h2>
                        <p>Unlike others we don’t think that anybody can write. That is why our writers are chosen based on their own work and that is what makes them so efficient. We don’t kid around when we say that we’re going to get the best for you. And that’s why our writers are the most educated bunch of individuals who have a good experience of creating content in the past.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-96 mb-4">
                    <div className="card-body text-center">
                        <FontAwesomeIcon className="text-5xl" icon={faTimeline} />
                        <h2 className="text-center py-4 uppercase">timely</h2>
                        <p>We might not be great but one thing that we’re good at is getting things done on time. We have a strict deadline policy because we love to stay ahead of time at all times. No matter when asked for something we promise to give it to you within a reasonable time.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-96 mb-4">
                    <div className="card-body text-center">
                        <FontAwesomeIcon className="text-5xl" icon={faDollar} />
                        <h2 className="text-center py-4 uppercase">const-effective</h2>
                        <p>We the people of Growth Guide do not believe in ripping you off and drawing out all of your finance. In Fact, we believe in helping people out without emptying your purse. And as a result, our prices are one of the most reasonable ones that you get on the kind of service that we provide. So that you get the best content writing services even if you’re a little short on budget.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-96 mb-4">
                    <div className="card-body text-center">
                        <FontAwesomeIcon className="text-5xl" icon={faHandshake} />
                        <h2 className="text-center py-4 uppercase">Diversity In Content</h2>
                        <p>The diverse range of content that we create doesn’t stop at websites, No sir! The list goes on from, Assignments to research papers we do it all. And that’s because we don’t just copy-paste stuff. And thus all this extra work provides us knowledge and also gives us a better experience to be ready for problems in future.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-96 mb-4">
                    <div className="card-body text-center">
                        <FontAwesomeIcon className="text-5xl" icon={faShareFromSquare} />
                        <h2 className="text-center py-4 uppercase">Flexibility</h2>
                        <p>Our flexibility gives us the power that defines our feature as the master of all trades. We don’t write to create content that occupies space, in fact, we do it so that your website’s value can increase. With flexibility like ours, you get content that includes everything from images to videos and texts, thereby providing a wholesome site experience. Thereby we work with a single aim to bring out the best, whatever that might be.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-96 mb-4">
                    <div className="card-body text-center">
                        <FontAwesomeIcon className="text-5xl" icon={faFile} />
                        <h2 className="text-center py-4 uppercase">No Plagiarism Content</h2>
                        <p>One thing that we at Growth Guide absolutely hate is copying of content. It’s more than just site ranking (although that’s one of the motivations) no, it’s more of a moral compass. We believe that copying stuff down is actually stealing and that makes us criminals. Thereby our writers’ research on each of our content. and after their first-hand draft it is also passed through Plagiarisms Checkers to make sure that whatever they have written is a hundred percent original.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Efficiency;