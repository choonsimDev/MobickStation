import { useEffect, useState } from "react";

const Test02api = () => {
    const [testData, setTestData] = useState([]);

    const dataFetch = async () => {
        try {
            const response = await fetch('/api/dbBannerItem/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: 'POST'
                })
            })
            const data = await response.json();
            console.log('data', data);
            setTestData(data);
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
            <h1>apiBannerDb</h1>
            {console.log('testData', testData)}
            {testData.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.id}</h1>
                        <h1>{item.name}</h1>
                        <h1>{item.bannerDBCategoryId}</h1>
                    </div>
                )

            })}
        </div>
    );
}



export default Test02api;