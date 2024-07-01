/* let num=[5,9,8,4,87,10];
let ordered = [];
let holder=0;
for (let index = 0; index < num.length; index++) {
    console.log(`current index ${index} value:${num[index]} ; next index ${index+1} value :${num[index+1]}
    `);
   for(let index = 0; index < num.length; index++){
        if(num[index]>num[index+1]){
            holder =  num[index+1];
            num[index+1]=num[index];
            num[index] = holder;
            console.log(`
            NOW: current index ${index} is bigger than next index ${index+1}
            current index ${index} value:${num[index]} ; next index ${index+1} value :${num[index+1]}`)
        }
   }

}

console.log(num); */