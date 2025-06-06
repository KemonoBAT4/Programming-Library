

/**
 * recreates the url by removing unwanted url routes
 * and adding the completed route at the end
 * @param {string} url the url you want to recreate
 * @param {number} number the number of routes you wanto to go backward
 * @param {string} add the completed route (without the / in front) you want to add at the end
 * @returns the completed url
 */
export function recreate_url(url, number, add) {

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
async function _fetch(url, method="GET", headers={}, body=undefined) {

    if (body != undefined) {
        body = JSON.stringify(body);
    }

    let response = await fetch(url, {
        method: method,
        headers: headers,
        body: body
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
export async function post_fetch(url, headers={}, body={}) {

    return await _fetch(url, "POST", headers, body);
}

/**
 * executes a get fetch with the given parameters
 * @param {string} url the url of the fetch
 * @param {json} headers the headers data
 * @param {json} body the body data
 * @returns response: the response data from the fetch
 */
export async function get_fetch(url, headers={}) {

    return await _fetch(url, "GET", headers);
}

/**
 * executes a delete fetch with the given parameters
 * @param {string} url the url of the fetch
 * @param {json} headers the headers data
 * @param {json} body the body data
 * @returns response: the response data from the fetch
 */
export async function delete_fetch(url, headers={}, body={}) {

    return await _fetch(url, "DELETE", headers, body);
}

/**
 * executes a put fetch with the given parameters
 * @param {string} url the url of the fetch
 * @param {json} headers the headers data
 * @param {json} body the body data
 * @returns response: the response data from the fetch
 */
export async function put_fetch(url, headers={}, body={}) {

    return await _fetch(url, "PUT", headers, body);
}
