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

// TODO: (W.I.P.)
/**
 * a linear calculator in javascript ex:
 * (input): 1 + (9 + (6*4)/2) + 1
 * (output): 23
 * @param {string} string 
 */
function linear_calculator(string) {
    string = string.replace(" ", "");
    string = string.trim();

    let result = 0;
    let count_bracket = 0;
    let in_brackets = false;

    // search through the list
    for(let char in string) {

        // make a new string
        let new_operation = "";

        // if its a square
        if(char === "(" || char == ")") {
            if(char === ")" && count_bracket === 1) {

                let sub_result = resolve(new_operation);
            }

            if(char === ")" && count_bracket > 1) {
                count_bracket--;
            }

            if(char === "(") {
                count_bracket++;
                in_brackets = true
            }


        } else if (in_brackets) {
            new_operation += char + ""
        } else {
            // 5 + 6*4/2 + 6
            if (char === "*" && char === "/") {
                if(high_prio_op === 0) {


                    let sub_result = ""
                }
            }
        }
    }

    return result;
}
