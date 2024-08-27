
let title_input = document.querySelector("#title");
let author_input = document.querySelector("#author");
let description_input = document.querySelector("#description");

let user = { "name": "test" };

if (is_user_logged() === false) {
	redirect(1,""); // returns to the previous page
}
author_input.value = user.name

// ########
// # FORM #
// ########

function on_submit() {
	if(validate_form()) {
		let title = title_input.value;
		let author = author_input.value
		let description = description_input.value
		
	}else {
		not_validated();
}


function validate_form() {
	if (title_input != "" && author_input != "" && description_input != "") {
		return true;
	}else {
		return false;
	}
}

function not_validated() {
	console.log("error");
}

	
// ##################
// # EVENT LISTENER #
// ##################

document.querySelector("#subit_button").addEventListener("click", async(event) => {
	event.preventDefault();
	on_submit();
})


// #############
// # UTILITIES #
// #############

// TODO: finish this function
function is_user_logged() {
	return true;
}

