
// import { render_header, render_footer } from "/library/render_utils.js";
// import { render } from "ejs";
import { render_header, render_footer } from "../libraries/render_utils.js";
import { get_fetch, post_fetch, recreate_url } from "../libraries/web_utils.js";

/* ##########
# UTILITIES #
########## */

// start when the document is ready
document.addEventListener("DOMContentLoaded", async(event) => {
    event.preventDefault();

    await loadPage();
});

async function loadPage() {

    let header_container = document.querySelector(".pl-header-container") || undefined;
    let footer_container = document.querySelector(".pl-footer-container") || undefined;

    // renders static elements (header and footer)
    await render_header(header_container);
    await render_footer(footer_container);


    await render_home();
}

async function render_home() {
    
}
