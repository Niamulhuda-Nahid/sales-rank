import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';
import HireSmarter from '../../../Components/HireSmarter';
import Review from '../Review/Review';
import AiSalesCoach from '../AiSalesCoach/AiSalesCoach';
import AnimatedBannerWrapper from '../../../Components/AnimatedBannerWrapper';


const Home = () => {
    return (
        <div className=''>
           <AnimatedBannerWrapper/>
           <Courses/>
           <AiSalesCoach/>
           <Faq/>
           <Review></Review>
           <HireSmarter></HireSmarter>
        </div>
    );
};

export default Home;