alert("This is linked");

//function

//loop to go through the 10 answers

//loop through the array? create an array with correct answers

//if statement

//if the answer is a word and it is selected then this is correct 
// if the answer is not a word and it is not selected then this is correct
//if the answer is a word and it is not selected then this is incorrect
//if the answer is not a word and it is selected then this is incorrect. 


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
    return countCorrect; 
}
         
/*function called isAWord
 * Takes const twoLetterWord. 
 * Takes a string and looks for the string in the const 
 * string will have to be lower case
 * If the string is in the const it returns true (indexOf)
 * else it returns false 
 */

const twoLetterWord = ["aa", "ab", "ad", "ae", "ag", "ah", "ai", "al", "am", "an", "ar", "as", "at", "aw", "ax", "ay", "ba", "be", "bi",
    "bo", "by", "ch", "da", "de", "di", "do", "ea", "ed", "ee", "ef", "eh", "el", "em", "en", "er", "es", "et",
    "ex", "fa", "fe", "fy", "gi", "go", "gu", "ha", "he", "hi", "hm", "ho", "id", "if", "in", "io", "is", "it",
    "ja", "jo", "ka", "ki", "ko", "ky", "la", "li", "lo", "ma", "me", "mi", "mm", "mo", "mu", "my", "na",
    "ne", "no", "nu", "ny", "ob", "od", "oe", "of", "oh", "oi", "om", "on", "oo", "op", "or", "os", "ou", "ow", "ox",
    "oy", "pa", "pe", "pi", "po", "qi", "re", "sh", "si", "so", "st", "ta", "te", "ti", "to", "ug", "uh", "um", "un",
    "up", "ur", "us", "ut", "we", "wo", "xi", "xu", "ya", "ye", "yo", "yu", "za", "zo"];
function isAWord(word) {
    

    return twoLetterWord.indexOf(word) != -1;
}







/*In this function we have the dollar sign 
 * 
 */

$(document).ready(function () { 
    getRedHerring();
    $('h1').on('click', function () {
        alert('bye');
    });

    /*$("td").click(function () {
        $("td").toggleClass("selected");
    });*/
    //.this sets it to only that element rather than the whole element. 
    $("td.clickable").click(function () {
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

    $("button.button-done").click(function () {
        alert(getResult());
    });

    $("button.button-again").click(function () {
        $(".clickable").removeClass("selected");
        $(".feedback-heading").hide();
        $(".feedback").hide();
        let pairs = [];
        for (let i = 1; i <= 5; ++i) {
            pairs.push(getWord());
        }
        //repeat five times:
        //add a red herring to the list
        for (let i = 1; i <= 5; ++i) {
            pairs.push(getRedHerring());

        }
       
        pairs = shuffleList(pairs)

        writeListToTable(pairs) 




        alert("Play again");
    });

/*add five words to the list
add five red herrings to the list
shuffle list
write the list to the table*/

function getWord() {
    let r = Math.floor(Math.random() * twoLetterWord.length);
    return twoLetterWord[r];
}

   function writeListToTable(list) {
       for (letterPair of list) {
           console.log(letterPair);
       }
   }

function getRedHerring() {
    const conto = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","X","Z","W","Y"]
    const vowels = ["A","E","I","O","U"]
    const alphabet = conto.concat(vowels)
    let word = "do";

    do {
        let r = Math.floor(Math.random() * alphabet.length);
        let firstletter = alphabet[r]
        let secondLetter = "";

        if (conto.includes(FirstLetter)) {
                secondLetter = vowels[Math.floor(Math.random() * vowels.length)]
        } else {
                secondLetter = conto[Math.floor(Math.random() * conto.length)]
        }

        word = firstLetter + secondLetter

    } while (twoLetterWord.includes(word))

    console.log(word);
    return word;


}

   function shuffleList(Arr) {
    
    return Arr;
   }










});