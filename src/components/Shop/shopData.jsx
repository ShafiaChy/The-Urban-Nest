import React from 'react';


import Outdoor from './Outdoor';
import LivingRoom from './LivingRoom';
import BedRoom from './BedRoom';
import DiningRoom from './DiningRoom';
import Office from './Office';

const shopData = [
    {
        label: 'Outdoor',
        content: <Outdoor></Outdoor>
    },
    {
        label: 'Living Room',
        content: <LivingRoom></LivingRoom>
    },
    {
        label: 'Bed Room',
        content: <BedRoom></BedRoom>
    },
    {
        label: 'Dining Room',
        content: <DiningRoom></DiningRoom>
    },
    {
        label: 'Office',
        content: <Office></Office>
    },
]
export default shopData;