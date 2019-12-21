/*
 * use function key word to declare a function and then give the function a name
 */

/*give parameter a meaningful name*/

//function addText(text) {

//    /*we can use string literals in console.log*/
//    console.log("called addText function");
//    var tempValue = "Hello World";
//    /*we can also pass values in console.log*/
//    console.log(tempValue);

//    /*make sure the 'text' parameter gets passed in and has a value*/
//    console.log(text);
//}


function addText() {/*give parameter a meaningful name*/

    /*we can use string literals in console.log*/
    console.log("called addText function");
    var tempValue = "Hello World";
    /*we can also pass values in console.log*/
    console.log(tempValue);

    /* make a new var to hold my inputs value*/
/* retreive this value directly from the DOM*/
    var text = document.querySelector('#textBox').value;

    /*make sure the 'text' parameter gets passed in and has a value*/
    console.log(text);
} 