function reverseString(string) {
	let result = [];
	string = string.toLowerCase();

    //Remove white spaces
    string = string.split(" ").filter(
			//Filter the empty spaces
			(item) => {
				if (item !== "") {
					return item;
				}
			},
    ).join(" ");

	for (let i = string.length - 1; i >= 0; i--) {
		result.push(string[i]);
	}

	// Convert array back to string and return it
	let reversedString = result.join("");

	return reversedString[0].toUpperCase() + reversedString.slice(1);
}

module.exports = reverseString;
