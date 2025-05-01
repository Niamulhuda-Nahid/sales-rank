import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';
import HireSmarter from '../../../Components/HireSmarter';
import Review from '../Review/Review';
import AiSalesCoach from '../AiSalesCoach/AiSalesCoach';


const Home = () => {
    return (
        <div className=''>
           <Banner/>
           <AiSalesCoach/>
           <Courses/>
           <Faq/>
           <Review></Review>
           <HireSmarter></HireSmarter>
        </div>
    );
};

export default Home;