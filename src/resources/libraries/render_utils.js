
const API_URL = `http://127.0.0.1:23104/api/v`;

async function get_all_snippets(search="example") {
    return {"status": "not implemented yet"};
}

async function render_snippet() {
    return {"status": "not implemented yet"};
}

async function get_snippet_from_api() {
    let response = await get_fetch()
    return {"status": "not implemented yet"};
}

/**
 * renders the header in the container passed as a parameter
 * and the settings section
 * @param {Element} container the container element for the page
 */
export async function render_header(container=undefined) {

    if (container === undefined) {
        return false;
    }

    // creates the header container and logic
    let header_container = document.createElement("div");
    header_container.classList.add("header-container");

    // creates the logo container and logic
    let logo_container = document.createElement("div");
    logo_container.classList.add("logo-container");

    // creates the title container and logic
    let title_container = document.createElement("div");
    title_container.classList.add("title-container");

    let title_hyperlink = document.createElement("a");
    title_hyperlink.href = "/home";

    let title_text = document.createElement("span");
    title_text.classList.add("title");
    title_text.innerText = "Programming library";
    title_hyperlink.append(title_text);
    title_container.append(title_hyperlink);

    // creates the search container and logic
    let search_container = document.createElement("div");
    search_container.classList.add("search-container");

    let search_input = document.createElement("input");
    search_input.classList.add("search-input");
    search_input.type = "text";
    search_input.placeholder = "Search for topic or a programming language . . .";

    let search_button = document.createElement("button");
    search_button.classList.add("search_button");
    search_button.innerText = "Search";

    let search_icon = document.createElement("img");
    search_icon.classList.add("search_icon");
    search_icon.src = "/svg/search.svg";
    search_icon.alt = "SearchIcon";
    search_button.append(search_icon);

    search_button.addEventListener("click", async(event) => {
        event.preventDefault();

        let value = search_input.value;
        search_input.value = "";

        if (value !== "") {
            window.location.href = `/search/${value}`;
        }
    });

    search_container.append(search_input, search_button);

    // creates the settings container and logic
    let settings_container = document.createElement("div");
    settings_container.classList.add("settings-container");

    let settings_button = document.createElement("button");
    settings_button.classList.add("settings_button");

    let settings_icon = document.createElement("img");
    settings_icon.classList.add("settings_icon");
    settings_icon.src = "/svg/settings.svg";
    settings_icon.alt = "SettingsIcon";
    settings_button.append(settings_icon);
    settings_container.append(settings_button);

    header_container.append(logo_container, title_container, search_container, settings_container);
    container.append(header_container);

    return true;
}

/**
 * renders the footer in the container passed as a parameter
 * @param {Element} container the container element for the page
 */
export async function render_footer(container=undefined) {

    if (container === undefined) {
        return false;
    }

    let items = [
        {
            "text": "Github",
            "link": "https://github.com/KemonoBAT4/programming-library",
            "icon": "/svg/search.svg",
            "class": "footer-github"
        },
        {
            "text": "kemono.bat.4@gmail.com",
            "link": "#",
            "icon": "/svg/search.svg",
            "class": "footer-mail"
        },
        {
            "text": "Documentation",
            "link": "/documentation",
            "icon": "/svg/search.svg",
            "class": "footer-documentation"
        },
        {
            "text": "Credits",
            "link": "/credits",
            "icon": "/svg/search.svg",
            "class": "footer-credits"
        }
    ];

    let footer_container = document.createElement("div");
    footer_container.classList.add("footer-container");

    for (let item in items) {
        let footer_item = document.createElement("div");
        footer_item.setAttribute("id", "footer-item");
        footer_item.classList.add(items[item].class);
        footer_item.innerHTML = `<a href="${items[item].link}"><span id="footer-item-text">${items[item].text}</span></a>`;
        footer_container.append(footer_item);
    }

    container.append(footer_container);
    return true;
}

/**
 * renders the search item that will be used in the search page
 * showing a title, description, author, and last update date.
 * The item will be clickable and will render a new page with the content
 * @param {Element} container the container element for the apge
 * @param {JSON} item the json item of the search
 */
export async function render_search_item(container=undefined, item=undefined) {

    if (container === undefined) {
        return false;
    }

    if (item === undefined) {
        item = {
            "title": "No item found",
            "language": "none",
            "description": "This is an empty description, probably caused by a bad search",
            "author_uid": "none",
            "last_update": `${new Date().getDate()}/${(new Date().getMonth() + 1)}/${new Date().getFullYear()}`,
        };
    }

    let search_item = document.createElement("div");
    search_item.classList.add("search-item");

    let title_container = document.createElement("div");
    title_container.classList.add("search-item-title-container");

    container.append(search_item);
}