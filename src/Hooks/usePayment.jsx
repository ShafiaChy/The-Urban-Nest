import { useState, useEffect } from 'react';

const usePayment = () => {
    const [loading, setLoading] = useState(true);
    const [revenue, setRevenue] = useState([]);

    useEffect(() => {
        fetch(`https://the-urban-nest-server.vercel.app/allPayments`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setRevenue(data.reduce((acc, curr) => acc + curr.total, 0).toFixed(2))
                setLoading(false)
            }
            )
    }, [])

    return [revenue, loading, setRevenue];
};

export default usePayment;