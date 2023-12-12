// const options ={
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '5484081c8dmshcc4b7be49e87297p177f57jsne808ea9af219',
//         'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//     } 
// };
// const userInput = document.querySelector('input');
// const btn = document.querySelector('button');


// let params=''
// const callParams=()=>{

//     params=userInput.value
// fetch('https://netflix54.p.rapidapi.com/search/?query=$(params)&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options)
//         .then(response => response.json())
//         .then(response => {
//             let output='';
//             response.items.map(item => {
//                 output+=`
//                 <h1>${item.title}</h1>
//                 <br>
//                 <a href="${item.url}">${item.url}</a>`
//             })
//             document.querySelector('.result').innerHTML=output;
//         })
//         .catch(err => console.error(err));
//     userInput.value='';
// }

// btn.addEventListener('click', callParams)



// document.addEventListener('DOMContentLoaded', function() {
// const options ={
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '5484081c8dmshcc4b7be49e87297p177f57jsne808ea9af219',
//         'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//     } 
// };

// const userInput = document.querySelector('input');
// const btn = document.querySelector('button');

// let params = '';

// const callParams = () => {
//     params = userInput.value;

//     fetch(`https://netflix54.p.rapidapi.com/search/?query=${params}&offset=0&limit_titles=50&limit_suggestions=20&lang=en`, options)
//         .then(response => response.json())
//         .then(data => {
//             let output = '';
//             data.items.map(item => {
//                 output += `
//                 <h1>${item.title}</h1>
//                 <br>
//                 <a href="${item.url}">${item.url}</a>`;
//             });
//             document.querySelector('.result').innerHTML = output;
//         })
//         .catch(err => console.error(err));

//     userInput.value = '';
// };

// btn.addEventListener('click', callParams);
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '5484081c8dmshcc4b7be49e87297p177f57jsne808ea9af219',
//             'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//         }
//     };

//     const userInput = document.querySelector('input');
//     const btn = document.querySelector('button');

//     let params = '';

//     const callParams = () => {
//         params = userInput.value;

//         fetch(`https://netflix54.p.rapidapi.com/search/?query=${params}&offset=0&limit_titles=50&limit_suggestions=20&lang=en`, options)
//             .then(response => response.json())
//             .then(data => {
//                 let output = '';
                
//                 if (data.items && Array.isArray(data.items)) {
//                     data.items.forEach(item => {
//                         output += `
//                         <h1>${item.title}</h1>
//                         <br>
//                         <a href="${item.url}">${item.url}</a>`;
//                     });
//                 } else {
//                     output = '<p>No items found.</p>';
//                 }

//                 document.querySelector('.result').innerHTML = output;
//             })
//             .catch(err => console.error(err));

//         userInput.value = '';
//     };

//     btn.addEventListener('click', callParams);
// });


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

        fetch(`https://netflix54.p.rapidapi.com/search/?query=${params}&offset=0&limit_titles=10&limit_suggestions=20&lang=en`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let output = '';

                if (data.titles.length > 0) {
                    data.items.forEach(item => {
                        output += `
                        <h1>${item.title}</h1>
                        <br>
                        <a href="${item.url}">${item.url}</a>`;
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
