var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords =[];
function censor(inSrt) {
	for (idx in censoredWords){
		inStr = inStr.replace(censoredWords[idx], "****");		
	}
	for (idx in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[idx], "****");
	}
	return isStr;
}
function addCensoredWord(word){
	customCensoredWords.push(word);
}
function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCendoredWords = getCensoredWords;