const Testapi = () => {
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
        }
        catch (error) {
            console.log('error', error);
        }
    }
    dataFetch();

    return (
        <div>
            <h1>Test API</h1>
        </div>
    )
}

export default Testapi;