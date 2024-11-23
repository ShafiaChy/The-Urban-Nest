import { useState, useEffect } from 'react';

const useUsers = () => {
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://the-urban-nest-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            }
            )
    }, [])

    return [users, loading, setUsers];
};

export default useUsers;