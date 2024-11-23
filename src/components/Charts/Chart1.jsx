import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useItems from "../../Hooks/useItems";
import Spinner2 from "../shared/Spinner/Spinner2";





const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
    
    if (active && payload && payload.length) {
        return (
            <div>
                <p style={{ color: "#fff", backgroundColor: "#333", padding: "5px" }}>{`${payload[0].name}`}</p>
                <hr />
                <p style={{ color: "#fff", backgroundColor: "#666", padding: "5px" }}>{`Available: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

const Chart1 = () => {
    const [items,loading] = useItems();
    
    console.log(items)
    if(loading){
      return <Spinner2></Spinner2>
    }
   const bedroom = items?.filter(item => item.category==='Bed Room') || '';
   const livingroom = items?.filter(item => item.category==='Living Room') || '';
   const dining = items?.filter(item => item.category==='Dining Room') || '';
   const office = items?.filter(item => item.category==='Office') || '';
   const outdoor = items?.filter(item => item.category==='Outdoor') || '';
  console.log(bedroom)
   
    const data = [
    
        {
            name: "Dining Room",
           
            items: dining.length
        },
        {
            name: "Living Room",
            
            items: livingroom.length
        },
        {
            name: "Bed Room",
            
            items: bedroom.length
        },
        {
            name: "Office",
            
            items: office.length
        },
        {
            name: "Outdoor",
            
            items: outdoor.length
        }
    ];
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <PieChart width={400} height={380}>
                <Legend align="center"
                    wrapperStyle={{ paddingTop: "4px", marginTop: "2px" }}
                    layout="horizontal"
                    verticalAlign="top"
                    iconSize={30}
                    iconType="diamond" />
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={130}
                    fill="#8884d8"
                    dataKey="items"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </div >
    )
}

export default Chart1;