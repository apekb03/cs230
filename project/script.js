"use strict";
// bind $ to the document
const $ = document.querySelector.bind(document);
// get tags
const input = $("input");
const button = $("button");
const ul = $("ul");

// function to search by title
const search = () => {
    if (!input.value) return;
    console.log(input.value)
    let result;
    fetch("https://netflix54.p.rapidapi.com/search/", {
        method: "GET",
        params: {
            query: input.value,
            offset: '0',
            limit_titles: '50',
            limit_suggestions: '20',
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': '5484081c8dmshcc4b7be49e87297p177f57jsne808ea9af219',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    }).then(res => res.json())
    .then(res => console.log(res))
    // traverse throough result array an d append title to li
    // console.log(result)
    // for (const res of result) {             
    //     const li = $.createElement("li");
    //     li.textContent = res.title;
    //     ul.appendChild(li)
    // }
}

button.addEventListener("click", search)