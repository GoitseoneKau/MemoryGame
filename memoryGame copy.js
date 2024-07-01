const valueToHex = (c)=>{
    let hex = c.toString(16);
    return hex.length==1? `0${hex}` : hex;
}

const rgbToHex = (rgb)=>{
   return `#${valueToHex(parseInt(rgb[0]))}${valueToHex(parseInt(rgb[1]))}${valueToHex(parseInt(rgb[2]))}`
}

const removeRGBconstructor = (rgb)=>{
    let slicedColor = rgb.slice(3,rgb.length);
    let substrColor = slicedColor.substring(1,slicedColor.length-1);
    return substrColor.split(",")
}

// const getTwoOfFlippedElements=(flippedElements)=>{
//     flippedElements = document.querySelectorAll(".block.flip");
//     let one = document.getElementById(flippedElements[0].children[1].id);
//     let two = document.getElementById(flippedElements[1].children[1].id);
//     return one,two;
// }


let colorList = ()=>{
    let colors=[];
    for (let index = 0; index < 4; index++) {
        let i = valueToHex(Math.floor(Math.random() * 255));
        let j = valueToHex(Math.floor(Math.random() * 255));
        let k = valueToHex(Math.floor(Math.random() * 255));
        const randomColor = `#${i}${j}${k}`;
        colors.push(randomColor);
    }
    return colors;
}



let indexRandomiser = ()=>{
    let indices = [];//set empty array

    while(true){//while loop;set to true until it breaks
            let i = Math.floor(Math.random() * 8);//variable assigned any random number between 0 and 7N.B// 8 is excluded;
    
            if (indices.indexOf(i) < 0) {//if any nu,ber generated in 'i' is not found(returns -1 if not found)
                indices.push(i)//push or insert the randomly generated number into the array
            }
    
            if (indices.length == 8) {//if the array is all filled(length is equal to 8)
                break;//then break
            }
    }//this will loop until the array is filled all the way;

    return indices;//returns the filled array
}

//FUNCTION TO PRODUCE RANDOM COLOURS IN AN ARRAY OF 8 VALUES;

let colourRandomiser = (indices,colors)=>{
    let randomisedColours =[];//set empty array;to contain the colours arranged with randomised indexes;
    let count=0;

    colors.forEach(color => {//loop through the colours

        let i=0;//set first index for indices array
        i+=count;//add count to index 'i' to either start with the first two elements or jump to the next index after 2 elements 
     
        for(let watcher=0;watcher<2;watcher++){//warcther forloop to loop through two of the 'indices' elements
            let index = indices[i];//put the 'indices' in a variable for clean code
            randomisedColours[index]=color;//set the index of the new array with 'index' and assign it the current 'color' witihin the forEach loop
            i++;//increment thw 'i' variable to go to the next element within 'indices'
        }
        count+=2;//increment count by 2 N.B/ to reset the 'i' counter's starting point of index in 'indices' array;
    });

    return randomisedColours;
}


const insertClickEvents = (blockElement,e) => {
e.preventDefault();

    let element = document.getElementById(blockElement.id);
    let elClassList = element.classList;


    if (counter < 2) {
        if (!elClassList.contains("flip")) {
            elClassList.add("flip");
            counter++;
        }
    }

    if (counter == 2) {
        flippedElements = document.querySelectorAll(".block.flip");
    let one = document.getElementById(flippedElements[0].children[1].id);
    let two = document.getElementById(flippedElements[1].children[1].id);
        // let one, two  = getTwoOfFlippedElements(flippedElements);
        let computedColor1 = window.getComputedStyle(one).backgroundColor;
        let computedColor2 = window.getComputedStyle(two).backgroundColor;
        console.log(computedColor1,computedColor2)
        // let computedColor1 = removeRGBconstructor(window.getComputedStyle(one).backgroundColor);
        // let hexComputedColor = rgbToHex(computedColor1);
        // let computedColor2 = removeRGBconstructor(window.getComputedStyle(two).backgroundColor);
        // let hexComputedColor2 = rgbToHex(computedColor2);

        // if (hexComputedColor == hexComputedColor2) {
        //     console.log("matched");
        //     openElements.forEach(element => {
        //         element.removeEventListener(new Event("click"))
        //     })
        //     counter = 0;
        // } else {
        //     setTimeout(() => {
        //         openElements.forEach(element => {
        //             element.classList.remove("flip");
        //         });
        //     }, 1 * 900)

        //     counter = 0;
        //     console.log(`unmatched counter ${counter}`);
        // }

        if (computedColor1 == computedColor2) {
            console.log("matched");
            openElements.forEach(element => {
                element.removeEventListener(new Event("click"))
            })
            counter = 0;
        } else {
            setTimeout(() => {
                openElements.forEach(element => {
                    element.classList.remove("flip");
                });
            }, 1 * 900)

            counter = 0;
            console.log(`unmatched counter ${counter}`);
        }
            
    }

}


let containerList = document.body.querySelectorAll(".container>.block");
let counter = 0;
let randomColours = colourRandomiser(indexRandomiser(),colorList());

let assignBackgroundColors = (el,index)=>{
    let elementID = el.children[1].id;
    let element =  document.getElementById(elementID);
   
    element.style.backgroundColor = randomColours[index];
}



for (let index = 0; index < containerList.length; index++) {
    const blockElement = containerList[index];
    assignBackgroundColors(blockElement,index,randomColours);
    blockElement.addEventListener("click", (e) => {
            e.preventDefault();
            let elementID = e.currentTarget.id;
            let element = document.getElementById(elementID);
            let elementClassList = element.classList;
        
            if (counter < 2) {
                if (!elementClassList.contains("flip")) {
                    elementClassList.add("flip");
                    counter++;
                }
            }
        
            if (counter == 2) {
                flippedElements = document.querySelectorAll(".block.flip");
                let unmatchedTiles=[];

                flippedElements.forEach((element)=>{
                    if(!element.classList.contains("matched")){
                        unmatchedTiles.push(element);
                    }
                });

                let tileOne = document.getElementById(unmatchedTiles[0].children[1].id);
                let tileTwo = document.getElementById(unmatchedTiles[1].children[1].id);
             
                let computedColor1 = window.getComputedStyle(tileOne).backgroundColor;
                let computedColor2 = window.getComputedStyle(tileTwo).backgroundColor;
        
                if (computedColor1 == computedColor2) {

                    tileOne.parentElement.classList+=" matched ";
                    tileTwo.parentElement.classList+=" matched ";
                    setTimeout(()=>{
                        if(document.querySelectorAll(".block.flip.matched").length==8){
                            let newIndex = 0;
                            let randomColours = colourRandomiser(indexRandomiser(),colorList());
                            flippedElements.forEach((element)=>{
                               element.classList.remove("flip");
                               element.classList.remove("matched");
                               assignBackgroundColors(element,newIndex,randomColours);
                               newIndex++;
                            });
                        }
                    },1*700)
                    counter = 0;
                } else {
                    setTimeout(() => {
                        tileOne.parentElement.classList.remove("flip");
                        tileTwo.parentElement.classList.remove("flip");
                    }, 1 * 500)
        
                    counter = 0;
              
                }
                    
            }
        
        });



}

