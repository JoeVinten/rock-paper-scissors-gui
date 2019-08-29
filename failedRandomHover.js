function chooseClass (){
    let hoverRandomNumber = Math.floor(Math.random() * 3) + 1;
    switch(hoverRandomNumber){
        case 1:
            return '.colorChoices1';
        case 2:
            return '.colorChoices2';
        case 3:
            return '.colorChoices3';
    }    
}


// randomise the hover over
const buttons =document.querySelector(".rock");

buttons.addEventListener('mouseover', (e) => {
    buttons.classList.add(chooseClass());
});

// buttonsArray.forEach((e) => {
//     e.addEventListener('mouseover', function randomColour(){


//     });

// });


// buttonsArray.forEach((buttons) => {
//     buttons.addEventListener('mouseover', (e) => {
//         buttonsArray.classList.add(chooseClass());
//     });
// });


        



// // choices.addEventListener('mouseout')

