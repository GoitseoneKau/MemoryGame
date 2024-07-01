const levelOne = 4;
const levelTwo = 6;
const levelThree = 8;
const levelFour = 12;

function fillTiles(n){
    let container = document.getElementById("con");
    container.replaceChildren("");
    let x= window.matchMedia("(min-device-width: 480px) and (max-height: 850px) and  (orientation: landscape) ");
    x.onchange=()=>{
        if( window.matchMedia("(min-device-width: 480px) and (max-height: 850px) and  (orientation: landscape) ").matches){
            container.style.gridTemplateColumns=`repeat(${n==12?n/3:n/2},100px)`;
        }
        if( window.matchMedia("only screen and (max-height: 850px) and  (orientation: potrait) ").matches){
        container.style.gridTemplateColumns=`repeat(${n==12?n/3:n/2},100px)`
        }
    }
    
  
    if( window.matchMedia("(min-device-width: 480px) and (max-height: 850px) and  (orientation: landscape) ").matches){
            container.style.gridTemplateColumns=`repeat(${n==12?n/3:n/2},100px)`;
        }
        if( window.matchMedia("only screen and (max-height: 850px) and  (orientation: potrait) ").matches){
            container.style.gridTemplateColumns=`repeat(${n==12?n/3:n/2},100px)`
            }
    for(let index=0;index<n;index++){

        let parent = document.createElement("div");
        parent.className = "block";
        parent.id = `${index+1}`;

        let childOne = document.createElement("div");
        childOne.className = "front";
        childOne.innerHTML = `${index+1}`;

        let childTwo = document.createElement("div");
        childTwo.className = "behind";
        childTwo.id = `tile${index+1}`;

        parent.appendChild(childOne);
        parent.appendChild(childTwo);
        container.append(parent);
    }
}



let cssColors = {
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkgrey": "#a9a9a9",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkslategrey": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dimgrey": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "goldenrod": "#daa520",
    "gold": "#ffd700",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#adff2f",
    "grey": "#808080",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavenderblush": "#fff0f5",
    "lavender": "#e6e6fa",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgray": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightgrey": "#d3d3d3",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightslategrey": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "lime": "#00ff00",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "maroon": "#800000",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370db",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "navy": "#000080",
    "oldlace": "#fdf5e6",
    "olive": "#808000",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#db7093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "purple": "#800080",
    "rebeccapurple": "#663399",
    "red": "#ff0000",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "silver": "#c0c0c0",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "slategrey": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "teal": "#008080",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "white": "#ffffff",
    "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00",
    "yellowgreen": "#9acd32"
}

let colorList = () => {
    let colors = [];
    let namedColors = Object.keys(cssColors);
    let containerList = document.body.querySelectorAll(".container>.block");
    while (true) {
        const randIndex = Math.floor(Math.random() * namedColors.length);
        if (colors.indexOf(namedColors[randIndex]) < 0) {
            let randomColor = namedColors[randIndex];
            colors.push(randomColor);
        }
        if (colors.length == containerList.length/2) {
            break;
        }
    }
    console.log(colors);
    return colors;
}


let indexRandomiser = () => {
    let indices = []; //set empty array
    let containerList = document.body.querySelectorAll(".container>.block");
    while (true) { //while loop;set to true until it breaks
        let i = Math.floor(Math.random() * containerList.length); //variable assigned any random number between 0 and 7N.B// 8 is excluded;

        if (indices.indexOf(i) < 0) { //if any nu,ber generated in 'i' is not found(returns -1 if not found)
            indices.push(i) //push or insert the randomly generated number into the array
        }

        if (indices.length == containerList.length) { //if the array is all filled(length is equal to 8)
            break; //then break
        }
    } //this will loop until the array is filled all the way;

    return indices; //returns the filled array
}

//FUNCTION TO PRODUCE RANDOM COLOURS;
let colourRandomiser = (indices, colors) => {
    let randomisedColours = []; //set empty array;to contain the colours arranged with randomised indexes;
    let count = 0;

    colors.forEach(color => { //loop through the colours

        let i = 0; //set first index for indices array
        i += count; //add count to index 'i' to either start with the first two elements or jump to the next index after 2 elements 

        for (let watcher = 0; watcher < 2; watcher++) { //warcther forloop to loop through two of the 'indices' elements
            let index = indices[i]; //put the 'indices' in a variable for clean code
            randomisedColours[index] = color; //set the index of the new array with 'index' and assign it the current 'color' witihin the forEach loop
            i++; //increment thw 'i' variable to go to the next element within 'indices'
        }
        count += 2; //increment count by 2 N.B/ to reset the 'i' counter's starting point of index in 'indices' array;
    });

    return randomisedColours;
}


let assignBackgroundColors = (el, index, randomColours) => {
    let elementID = el.children[1].id;
    let element = document.getElementById(elementID);
    let c = randomColours[index];
    element.style.backgroundColor = c;
    element.innerText = c;
    if(c=="black"){
        console.log(c);
        element.style.color="white";
    }if(c.match("dark")>0){
        console.log(c);
        element.style.color="white";
    }if(c.match(/navy/g)>0){
        console.log(c);
        element.style.color="white";
    }
    else{
        element.style.color="black";
    }
}


function StartGame() {
    let containerList = document.body.querySelectorAll(".container>.block");
    let counter = 0;
    let randomColours = colourRandomiser(indexRandomiser(), colorList());
    for (let index = 0; index < containerList.length; index++) {
        const blockElement = containerList[index];
         assignBackgroundColors(blockElement, index, randomColours);
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
                let unmatchedTiles = [];

                flippedElements.forEach((element) => {
                    if (!element.classList.contains("matched")) {
                        unmatchedTiles.push(element);
                    }
                });

                let tileOne = document.getElementById(unmatchedTiles[0].children[1].id);
                let tileTwo = document.getElementById(unmatchedTiles[1].children[1].id);

                let computedColor1 = window.getComputedStyle(tileOne).backgroundColor;
                let computedColor2 = window.getComputedStyle(tileTwo).backgroundColor;

                if (computedColor1 == computedColor2) {

                    tileOne.parentElement.classList += " matched ";
                    tileTwo.parentElement.classList += " matched ";
                    setTimeout(() => {
                        if (document.querySelectorAll(".block.flip.matched").length == containerList.length) {
                            let newIndex = 0;
                            let randomColours = colourRandomiser(indexRandomiser(), colorList());
                            flippedElements.forEach((element) => {
                                element.classList.remove("flip");
                                element.classList.remove("matched");
                                 assignBackgroundColors(element, newIndex, randomColours);
                                newIndex++;
                            });
                        }
                    }, 1 * 700)
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
    } //end of forloop

}

let num = document.getElementById("level");
let level=0;
num.onchange=(e)=>{
e.preventDefault();
level = e.currentTarget.value;
}
let btnStart = document.getElementById("btnStart");
btnStart.onclick=()=>{
    if(level==1){
        fillTiles(levelOne);
        StartGame();  
    }
    if(level==2){
        fillTiles(levelTwo);
        StartGame();  
    }
    if(level==3){
        fillTiles(levelThree);
        StartGame();  
    }
    if(level==4){
        fillTiles(levelFour);
        StartGame();  
    }   
}
fillTiles(levelThree);
StartGame();