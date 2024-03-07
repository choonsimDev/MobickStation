import { useEffect, useState } from "react";

const Testapi = () => {
    const [data, setData] = useState([]); //useState is a hook that lets you add React state to function components

    const dataFetch = async () => {
        try {
            const response = await fetch('/api/test/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: 'Test'
                })
            })
            const data = await response.json();
            console.log('data', data);
            setData(data);
        }
        catch (error) {
            console.log('error', error);
        }
    }
    useEffect(() => {
        dataFetch();
    }, []); //The empty array [] means that the useEffect function will only run once, after the initial render

    return (
        <div>
            <h1>Test API</h1>
            {console.log("type", typeof data)}
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.id}</h1>
                        <h1>{item.email}</h1>
                        <h1>{item.phone}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Testapi;