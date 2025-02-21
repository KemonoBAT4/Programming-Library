let { port } = require("./config"); // see if this works
let API_URL = "127.0.0.1:";
let default_headers = {}
let default_body = {}

// start when the document is ready
document.addEventListener("DOMContentLoaded", async(event) => {
    event.preventDefault();
    // console.log(`from search.js: ${search}`);
    completed = await loadPage(search);
    console.log(`Completed: ${completed}`);
});

/**
 * Searches through the database and then return possible answers, renders the template for the search
 * add click action on the line item that refers to the item selected
 * @param {search} url the url you want to recreate
 */
async function searchQuery(search) {
    let url = `${API_URL}/search/${search}`; // api url
    let headers = {}; // headers of the request
    let body = {}; // body of the request
    let response = await get_fetch(url, headers, body); // makes the request

    let search_container = document.querySelector("."); // content container
    
}

async function renderHeaders() {
    let url = `${API_URL}/page/headers`; // api url
    let headers = {};
    let body = {};
    let response = await get_fetch(url, headers, body)


}


async function loadPage() {
    renderHeaders();

    searchQuery(search);

    return true;
}
