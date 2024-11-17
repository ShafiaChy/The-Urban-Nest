import React from 'react';
import { Helmet } from 'react-helmet';

import Banner2 from '../components/shared/Banner2/Banner2';
import Spinner2 from '../components/shared/Spinner/Spinner2';
import useItems from '../Hooks/useItems';
import { Parallax } from 'react-parallax';
import img1 from '../assets/asset/menu/Banner3.jpg'
import Outdoor from '../components/Collection/Outdoor';
import DiningRoom from '../components/Collection/DiningRoom';
import LivingRoom from '../components/Collection/LivingRoom';
import BedRoom from '../components/Collection/BedRoom';
import Office from '../components/Collection/Office';

const Collection = () => {

    const [items, loading] = useItems();
    if (loading) {
        return <Spinner2></Spinner2>
    }

    return (
        <div>
            <Helmet>
                <title>UN Furniture |  Catalog</title>
            </Helmet>

            {/* <Banner2 banner={{ title: 'Our Menu', description: 'Would you like to try a dish?', image: 'bg-menu-banner' }}></Banner2> */}

            <Parallax blur={{ min: -30, max: 30 }} bgImage={img1} bgImageAlt="menu banner" strength={200}>
                <Banner2 banner={{ title: 'Our Collection', description: 'Would you like to try our furniture?' }}></Banner2>
            </Parallax>

            <div>
                {items && <Outdoor items={items}></Outdoor>}
                {items && <DiningRoom items={items}></DiningRoom>}
                {items && <LivingRoom items={items}></LivingRoom>}
                {items && <BedRoom items={items}></BedRoom>}
                {items && <Office items={items}></Office>}
            </div>


        </div>
    );
};

export default Collection;