const Test02api = () => {

    const dataFetch = async () => {
        try {
            const response = await fetch('/api/test02/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: 'POST'
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
      <h1>AdAreaDbAdInfoTest</h1>
    </div>
  );
}

export default Test02api;