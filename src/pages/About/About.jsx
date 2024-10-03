import ContentStrategy from "./ContentStrategy";
import Efficiency from "./Efficiency";
import Note from "./Note";
import Year from "./Year";

const About = () => {
    return (
        <div>
            <Year></Year>
            <ContentStrategy></ContentStrategy>
            <Note></Note>
            <Efficiency></Efficiency>
        </div>
    );
};

export default About;