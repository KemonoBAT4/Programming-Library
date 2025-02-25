
import { render_header, render_footer } from "/library/render_utils.js";

document.addEventListener("DOMContentLoaded", async(event) => {
    event.preventDefault();

    let body = document.querySelector("body");

    render_header(body);
    render_footer(body);
});