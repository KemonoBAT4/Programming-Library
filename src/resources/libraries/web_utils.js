/**
 * @name Js-Library
 * @author Kemono_BAT_4
 */

/**
 * recreates the url by removing unwanted url routes
 * and adding the completed route at the end
 * @param {string} url the url you want to recreate
 * @param {number} number the number of routes you wanto to go backward
 * @param {string} add the completed route (without the / in front) you want to add at the end
 * @returns the completed url
 */
function recreate_url(url, number, add) {

    //      [0]        [1]
    // ex: http:  127.0.0.1:5000/example/1
    let items = url.split("//");
    let connecton_type = items[0];
    let remaining_url = items[1];
    let baseUrl = connecton_type + "//" +  remaining_url.split("/")[0];

    if( remaining_url.split("/").length >= 1 ) {
        split = remaining_url.split("/");

        length = split.length - 1;

        if(length > number) {
            let add_quantity = length - number;
            let new_url = baseUrl;

            for(let i = 0; i < add_quantity; i++) {
                new_url += "/" + split[i + 1];
            }

            if (add != ""){
                new_url += "/" + add;
            }
            return (new_url)
        }
    }
    return ( baseUrl + "/" + add );
}

/**
 * executes a fetch with the given parameters
 * @param {string} url the url of the fetch
 * @param {string} method the method of the fetch (GET, POST, DELETE, PUT)
 * @param {json} headers the headers data
 * @param {json} body the body data
 * @returns response: the response data from the fetch
 */
async function fetch(url, method="GET", headers={}, body={}) {

    let response = await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    }).then(res => res.json());

    return response;
}

/**
 * executes a post fetch with the given parameters
 * @param {string} url the url of the fetch
 * @param {json} headers the headers data
 * @param {json} body the body data
 * @returns response: the response data from the fetch
 */
async function post_fetch(url, headers={}, body={}) {

    return await _fetch(url, "POST", headers, body);
}

/**
 * executes a get fetch with the given parameters
 * @param {string} url the url of the fetch
 * @param {json} headers the headers data
 * @param {json} body the body data
 * @returns response: the response data from the fetch
 */
async function get_fetch(url, headers={}, body={}) {

    return await _fetch(url, "GET", headers, body);
}

/**
 * executes a delete fetch with the given parameters
 * @param {string} url the url of the fetch
 * @param {json} headers the headers data
 * @param {json} body the body data
 * @returns response: the response data from the fetch
 */
async function delete_fetch(url, headers={}, body={}) {

    return await _fetch(url, "DELETE", headers, body);
}

/**
 * executes a put fetch with the given parameters
 * @param {string} url the url of the fetch
 * @param {json} headers the headers data
 * @param {json} body the body data
 * @returns response: the response data from the fetch
 */
async function put_fetch(url, headers={}, body={}) {

    return await _fetch(url, "PUT", headers, body);
}

export { recreate_url, post_fetch, get_fetch, delete_fetch, put_fetch }
