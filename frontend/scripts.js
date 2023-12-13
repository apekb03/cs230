`use strict`


document.addEventListener('DOMContentLoaded', function() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5484081c8dmshcc4b7be49e87297p177f57jsne808ea9af219',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const userInput = document.getElementById('movies');
    const searchButton = document.getElementById('searchButton');

    let params = '';

    const callParams = () => {
        params = userInput.value;

        fetch(`https://netflix54.p.rapidapi.com/search/?query=${params}&offset=0&limit_titles=50&limit_suggestions=20&lang=en`, options)
            .then(response => response.json())
            .then(data => {
               
                let output = '';

                if (data.titles.length > 0) {

                    data.titles.forEach(item => {
                        const genre = item.jawSummary.genres[0].name;  // this is for movie genre])
                        const bg_img = item.jawSummary.backgroundImage.url;  // this is for movie image
                        const title = item.jawSummary.title;

                        output += `

                        
                        <h1>Title: ${title}</h1>
                        
                        <img src="${bg_img}"></img>
                        <h2>Genre: ${genre}</h2>
                        <details>
                        <summary>Summary...</summary>
                        ${item.jawSummary.synopsisRegular}
                        </details><br>`;
                    });
                } else {
                    output = '<p>No items found.</p>';
                }

                document.querySelector('.result').innerHTML = output;
            })
            .catch(err => console.error(err));

        userInput.value = '';
    };

    searchButton.addEventListener('click', callParams);
});
