import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    // console.log(email)
    useEffect(() => {

        if (email) {
            console.log(email)
            fetch(`https://the-urban-nest-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);

                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;