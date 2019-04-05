alert("Select the two letter pairs you think are words. Click done when you have made your selections")

const twoLetterWord = ["aa", "ab", "ad", "ae", "ag", "ah", "ai", "al", "am", "an", "ar", "as", "at", "aw", "ax", "ay", "ba", "be", "bi",
    "bo", "by", "ch", "da", "de", "di", "do", "ea", "ed", "ee", "ef", "eh", "el", "em", "en", "er", "es", "et",
    "ex", "fa", "fe", "fy", "gi", "go", "gu", "ha", "he", "hi", "hm", "ho", "id", "if", "in", "io", "is", "it",
    "ja", "jo", "ka", "ki", "ko", "ky", "la", "li", "lo", "ma", "me", "mi", "mm", "mo", "mu", "my", "na",
    "ne", "no", "nu", "ny", "ob", "od", "oe", "of", "oh", "oi", "om", "on", "oo", "op", "or", "os", "ou", "ow", "ox",
    "oy", "pa", "pe", "pi", "po", "qi", "re", "sh", "si", "so", "st", "ta", "te", "ti", "to", "ug", "uh", "um", "un",
    "up", "ur", "us", "ut", "we", "wo", "xi", "xu", "ya", "ye", "yo", "yu", "za", "zo"];

function startGame() {
    $(".clickable").removeClass("selected");
    $(".feedback-heading").hide();
    $(".feedback").hide();
    let pairs = [];
    for (let i = 1; i <= 5; ++i) {
        pairs.push(getWord());
    }

    for (let i = 1; i <= 5; ++i) {
        console.log(i);
        pairs.push(getRedHerring());

    }

    $(".feedback").removeClass("correct")
    $(".feedback").removeClass("incorrect")
    $(".button-again").hide();

    pairs = shuffleList(pairs)

    writeListToTable(pairs)

}

/*Created function called getResult
 * let tds = [];
    $("td").each(function (i, e) { tds.push($(e)) }); This is a let that creates an empty array. This takes the elements of the 
    "td" in the table and pushes them into a new array
 * Created a loop for(el of tds) each element of the array.  
 * I added an if statement twoLetterWords.indexOf goes through the twoletterword array and looks for a string. 
 * The (el.text) ensures that the string is found and it is compared to the array
 * Note that the .indexOf() is a function
 * If the word is not found in the array the indexOf function returns -1
 * In this case, we need the opposite outcome and therefore put a ! infront of the =1, this flips what we want to return
 * So in the outcome of that part if the word does not match a word it = -1, however we want it to match so it has to match a word
 * We have the && which means both sides of the statement has to be true
 * In the second part we have el.hasClass("Selected") this asks if the class is selected or not. 
 * If both the word is correct and the class is selected then this is added to the countCorrect 
 * In the second one, the same applies but this one is equal to -1. (Notice no ! sign before the =)
 * So this says that if it is not a word (indexOf will return -1 if the word does not exist)  
 * Notice that after the && sign I have the ! infront of el.hasClass("selected") 
 * Similar to the above !=-1 this flips it to return what we want
 * So .hasClass is flipped over, thus leading to this statement being correct. 
 * Eg isnotword & it is not selected.
 * This then adds to the correctcount
 */

function getResult() {
    let countCorrect = 0;
    let tds = [];
    $("td.clickable").each(function (i, e) { tds.push($(e)) });
   
    for (el of tds) {
        let lowerText = el.text().toLowerCase();
        let fb = el.next(".feedback");

        if (isAWord(lowerText) == (el.hasClass("selected"))) {
            fb.text("correct");
            fb.addClass("correct");
            countCorrect++;

        } else {
            fb.text("incorrect");
            fb.addClass("incorrect");
        } 

    }
    return "Your score is " + countCorrect; 
}
         
function isAWord(word) {
    

    return twoLetterWord.indexOf(word.toLowerCase()) != -1;
}

function getResults() {
    return 0;
}

function getWord() {
    let r = Math.floor(Math.random() * twoLetterWord.length);
    return twoLetterWord[r].toUpperCase();
}

function writeListToTable(list) {
    for (letterPair of list) {
        console.log(letterPair);
    }

    $(".clickable").each(function (index, element) {
        $(element).text(list[index]);

    })
}

function shuffleList(pairs) {
    let shuffList = [];


    while (pairs.length > 0) {
        let g = Math.floor(Math.random() * pairs.length);
        let chosenWord = pairs[g];
        pairs.splice(g, 1);
        shuffList.push(chosenWord);
    }


    return shuffList;


}

function getRedHerring() {
    const conto = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "W", "Y"]
    const vowels = ["A", "E", "I", "O", "U", "Y"]

    do {
        let r = Math.floor(Math.random() * conto.length);
        let f = Math.floor(Math.random() * vowels.length);
        let firstLetter = conto[r]
        let secondLetter = vowels[f];

        if (Math.random() > 0.5) {
            word = conto[r] + vowels[f]
        } else {
            word = vowels[f] + conto[r]
        }

    }

    while (isAWord(word))

    console.log(word);
    return word;
}

$(document).ready(function () { 
    
    $("td.clickable").click(function () {
        //$(this).toggleClass("selected");
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
        } else {
            $(this).addClass("selected");
        }
    });

    $("button.button-done").click(function () {
        $(".feedback-heading").show();
        $(".feedback").show();
        $(".button-again").show();
        alert(getResult());
    });

    $("button.button-again").click(function () {
        alert("Play Again?");
            startGame();
            
    });


    startGame();

});