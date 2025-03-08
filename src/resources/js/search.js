
import { render_header, render_footer } from "../libraries/render_utils.js";
import { get_fetch, post_fetch } from "../libraries/web_utils.js";


let API_URL = `http://127.0.0.1:23104/api/`;

/**
 * Searches through the database and then return possible answers, renders the template for the search
 * add click action on the line item that refers to the item selected
 * @param {search} url the url you want to recreate
 */
async function searchQuery(search) {

    console.log("sanitizing the search text...");
    search = search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    console.log("sanitize complete");

    let url = `${API_URL}/search/${search}`; // api url
    let headers = {
        "Content-Type": "application/json"
    }; // headers of the request
    let body = {}; // body of the request
    let response = await get_fetch(url, headers, body); // makes the request

    let search_container = document.querySelector("."); // content container
}

/* ##########
# UTILITIES #
########## */

// start when the document is ready
document.addEventListener("DOMContentLoaded", async(event) => {
    event.preventDefault();
    // console.log(`from search.js: ${search}`);
    completed = await loadPage(search);
    if (completed == true) {
        console.log(`Completed: ${completed}`);

        console.log(`searching data: ${search}`);
        searchQuery(search);
    }
});

async function loadPage() {

    let header_container = document.querySelector(".pl-header-container") || undefined;
    let footer_container = document.querySelector(".pl-footer-container") || undefined;

    await render_header(header_container);
    await render_footer(footer_container);

    return true;
}
