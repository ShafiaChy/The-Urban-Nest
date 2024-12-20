import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../Hooks/useItems";
import Card from '../shared/Card/Card'
import Spinner2 from "../shared/Spinner/Spinner2";
import Title from '../shared/Title/Title';

const Collection = () => {
  const [items, loading] = useItems();
  if (loading) {
    return <Spinner2></Spinner2>
  }
  return (
    <div >

      <Title type={{ smallHeading: 'Check it out', title: 'From Our Collection' }}></Title>
      <div className="grid md:grid-cols-2 gap-5 px-10">

        {items?.filter(item => item.category.includes('Popular')).map((menuItem, index) => (
          <div className="flex space-x-4" key={index}>
            <Card>
              {menuItem}
            </Card>
          </div>
        ))}

      </div>

      <div className="flex justify-center mt-10">
        <Link to="/menu"><button className="text-white btn btn-outline uppercase border-0 px-14 border-b-4 mb-8">View full menu</button></Link>
      </div>
    </div>

  );
};

export default Collection;
