//www.websudoku.com cheat bot
//reads the answer that is displayed on the page and inputs and clicks submit
//make sure to be on view.websudoku.com with script inputs

function solveSudoku() {
	//get element answer
	var answer = document.getElementById("cheat").value;
	//get hidden  editmask
	var mask = document.getElementById("editmask").value;
	//for each 1 add number

	var inputs = document.getElementsByTagName("input");

	var answerPlace = 0;
	var inputPlace = 0;
	while (answerPlace < answer.length) {
		//if not filled
		if (mask.charAt(answerPlace) == '1') {
			//console.log(answer.charAt(answerPlace));
			inputs[inputPlace].value = answer.charAt(answerPlace);
		}
		answerPlace++;
		inputPlace++;
	}

	var submits = document.getElementsByName("submit");
	//submits[0].click();// how am I doing?
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
    	solveSudoku();
		//document.addEventListener('DOMContentLoaded', solveSudoku);
	}
});
//chrome.browserAction.onClicked.addListener(solveSudoku);
//document.addEventListener('DOMContentLoaded', solveSudoku);
//solveSudoku();

