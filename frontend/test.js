async function fetchData() {
    const url = 'https://netflix54.p.rapidapi.com/search/?query=Friends&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5484081c8dmshcc4b7be49e87297p177f57jsne808ea9af219',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
// ...
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
        // ...

}

// Call the async function
fetchData();
