function caesarCipher(text, translocateNum) {
	let codedText = [];

	//Just the words
	let words = returnWords(text);

    //Code the words in the array
	for (let i in words) {
		codedText.push(
			words[i].split("").map((letter) => {
                if(!letter.match(/^[a-z]+$/i)){ //Distinguish between letters and special characters
                    return letter;
                } else {
                    return letterTranslocated(letter, translocateNum);
                }
			}).join("")
		);
	}

    return codedText.join(" ");
}

function returnWords(text) {
	//Filter the whitespaces and get just the words
	return text.split(" ").filter(
		//Filter the empty spaces
		(item) => {
			if (item !== "") {
				return item;
			}
		},
	);
}

function letterTranslocated(letter, translocateNum) {
	let index;

    //Because, yes
    let alphabetBoth = {
        uppercase : [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        lowercase : [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    }

    //Distinguish between Uppercase and lowercase letters
    let letterSet = alphabetBoth.uppercase.includes(letter) ? alphabetBoth.uppercase : alphabetBoth.lowercase;

	index = (
        (letterSet.findIndex((letterInAlphabet) => {
            return letterInAlphabet === letter;
        }) +
            translocateNum) %
        26
    );

    return letterSet[index];
}

module.exports = caesarCipher;
