function capitalize(text) {
	return text
		.split(" ")
		.filter(
			//Filter the empty spaces
			(item) => {
				if (item !== "") {
					return item;
				}
			},
		)
		.map(
			(word) =>
				word[0].toUpperCase() + word.slice(1), //And set the first letter of each word UpperCase
		)
		.join(" ");
}

module.exports = capitalize;
