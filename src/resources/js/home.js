
// import { render_header, render_footer } from "/library/render_utils.js";
import { render_header, render_footer } from "../libraries/render_utils.js";
import { } from "../libraries/web_utils.js";

document.addEventListener("DOMContentLoaded", async(event) => {
    event.preventDefault();

    let header_container = document.querySelector(".pl-header-container");
    let footer_container = document.querySelector(".pl-footer-container");

    render_header(header_container);
    render_footer(footer_container);
});