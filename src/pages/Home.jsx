import React from 'react';
import About from '../components/Home/About';
import { Helmet } from 'react-helmet';
import Category from '../components/Home/Category'
import ChefRecommends from '../components/Home/ChefRecommends';
import LatestNews from '../components/Home/LatestNews';
import Collection from '../components/Home/Collection';
import Testimonials from '../components/Home/Testimonials';
import Banner from '../components/shared/Banner/Banner';
import Features from '../components/Home/Features';
import FurnitureSection from '../components/Home/FurnitureSection';


const Home = () => {
    return (
        <div >

          
           <Helmet>
                <title>UrbanNest Furniture </title>
            </Helmet>
            
            <Banner banner={{ title: 'UrbanNest', description: 'Banani 400, Unit 41, Bangladesh' }}></Banner>
          <Category></Category>
            <About></About>
            <Collection></Collection>
            <FurnitureSection></FurnitureSection>
            <ChefRecommends></ChefRecommends>
            <LatestNews></LatestNews>
            <Testimonials></Testimonials>
            <Features></Features>
        
        </div>
    );
};

export default Home;