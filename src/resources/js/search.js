
import { render_header, render_footer } from "../libraries/render_utils.js";
import { get_fetch, post_fetch } from "../libraries/web_utils.js";
import { SearchItem } from "../components/sections.js";

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
    // let body = {}; // body of the request
    // let response = await get_fetch(url, headers); // makes the request

    let response = [];

    response = [
        {
            "title": "title1",
            "language": "language1",
            "description": "description1",
            "author_uid": "author_uid1",
            "last_update": "last_update1"
        },
        {
            "title": "title2",
            "language": "language2",
            "description": "description2",
            "author_uid": "author_uid2",
            "last_update": "last_update2"
        },
        {
            "title": "title3",
            "language": "language3",
            "description": "description3",
            "author_uid": "author_uid3",
            "last_update": "last_update3"
        },
        {
            "title": "title4",
            "language": "language4",
            "description": "description4",
            "author_uid": "author_uid4",
            "last_update": "last_update4"
        },
        {
            "title": "title5",
            "language": "language5",
            "description": "description5",
            "author_uid": "author_uid5",
            "last_update": "last_update5"
        }
    ]


    let search_container = document.querySelector(".search-result-container"); // content container

    for(let item of response) {

        let search_item_container = document.createElement("div");
        search_item_container.classList.add("search-item-container");

        let object = new SearchItem(
            item.title,
            item.language,
            item.description,
            item.author_uid,
            item.last_update
        );

        search_item_container.insertAdjacentHTML("beforeend", object.render());
        search_container.append(search_item_container);
    }
}

/* ##########
# UTILITIES #
########## */

// start when the document is ready
document.addEventListener("DOMContentLoaded", async(event) => {
    event.preventDefault();
    // console.log(`from search.js: ${search}`);
    let completed = await loadPage(search);
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
