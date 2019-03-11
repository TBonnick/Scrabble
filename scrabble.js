alert("This is linked");

//function

//loop to go through the 10 answers

//loop through the array? create an array with correct answers

//if statement

//if the answer is a word and it is selected then this is correct 
// if the answer is not a word and it is not selected then this is correct
//if the answer is a word and it is not selected then this is incorrect
//if the answer is not a word and it is selected then this is incorrect. 


function getResult() {
    let countCorrect = 0;
    const twoLetterWords = ["aa", "ab", "ad", "ae", "ag", "ah", "ai", "al", "am", "an", "ar", "as", "at", "aw", "ax", "ay", "ba", "be", "bi",
        "bo", "by", "ch", "da", "de", "di", "do", "ea", "ed", "ee", "ef", "eh", "el", "em", "en", "er", "es", "et",
        "ex", "fa", "fe", "fy", "gi", "go", "gu", "ha", "he", "hi", "hm", "ho", "id", "if", "in", "io", "is", "it",
        "ja", "jo", "ka", "ki", "ko", "ky", "la", "li", "lo", "ma", "me", "mi", "mm", "mo", "mu", "my", "na",
        "ne", "no", "nu", "ny", "ob", "od", "oe", "of", "oh", "oi", "om", "on", "oo", "op", "or", "os", "ou", "ow", "ox",
        "oy", "pa", "pe", "pi", "po", "qi", "re", "sh", "si", "so", "st", "ta", "te", "ti", "to", "ug", "uh", "um", "un",
        "up", "ur", "us", "ut", "we", "wo", "xi", "xu", "ya", "ye", "yo", "yu", "za", "zo"];
    let tds = [];
    $("td").each(function (i, e) { tds.push($(e)) });

    for (el of tds) {
        if (isword && selected) {
            countCorrect++;

        } else if (not a word && not selected {
            countCorrect++;
        }  else {

        }
    }



       

    alert('Well done, you scored ' + (countCorrect));

}










$(document).ready(function () { 
    /*alert('Hello');*/
    $('h1').on('click', function () {
        alert('bye');
    });

    /*$("td").click(function () {
        $("td").toggleClass("selected");
    });*/

    $("td").click(function () {
        //$(this).toggleClass("selected");
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
        } else {
            $(this).addClass("selected");
        }
            
    });

    function getResults() {
        return 0;
    }

    $("button").click(function () {
        alert(getResults());
    });

    //add a getResults function that just returns 0 and call it so that your alert displays "0"

    
    
});