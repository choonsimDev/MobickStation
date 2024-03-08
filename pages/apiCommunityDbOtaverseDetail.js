import { useEffect, useState } from "react";

const CommunityDBPost = () => {
    const [testData, setTestData] = useState([]);

    const dataFetch = async () => {
        try {
            const response = await fetch('/api/dbCommunityPost/', {
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
            <h1>Community DB Post</h1>
            {console.log('testData', testData)}
            {testData.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.id}</h1>
                        <h1>{item.category}</h1>
                        <h1>{item.title}</h1>
                    </div>
                )

            })}
        </div>
    );
}



export default CommunityDBPost;