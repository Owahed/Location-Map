import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div>
                <h1 className="counter"><CountUp end={2021} duration={5} /></h1>
                <p className="title-name">What if you discovered Marseille differently this year?</p>

                <Link to="/map" className="button"><span className="button-name">Next</span></Link>
            </div>
        </div>
    );
};

export default Home;