let array = [12,23,34,54,56,67,64,42,86,31,54,31];

/* this function gets a string of words separated by '-' an return a string with all the words
in a single compact string without separations and uppercase first letter */
function camelize(wordsSplit){
    let spliting = wordsSplit.split('-');
    // console.log(spliting);

    spliting = spliting.map(splited => splited.charAt(0).toUpperCase() + splited.slice(1))
    // console.log(spliting)

    let joined = spliting.join('');
    return joined;
}

/* this function recives an array and create a new one with only the values greater or equal
to a and smaller or equal to b */ 
function filterRange(arr, a, b){
    NewArr = arr.filter((num) => num >= a);
    NewArr = NewArr.filter((nnum) => nnum <= b);

    console.log(arr);

    return NewArr;
}

/*same as the last function with the difference that this one modifies the original array*/
function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i , 1);
            i--;
        }
    }

}

/*this methods work together to sort numeric values in an array and then reverse the order*/
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function sortDecreasing(arr){
    arr.sort(compareNumeric);

    arr.reverse()
    
    return arr;
}
/*create a sorted copy o an array */
function copySorted(arr){
    return arr.slice().sort();
    //here we used slice without any arguments cause the sort method will modify the original array
}

/*shuffles the elements in an array*/
function shuffle(arr){
    array.sort(() => Math.random() - 0.5); //not optimal solution.
}

/*filter unique elements in an array */
function unique(arr){
    let filtered = [];
    
    for(let elem of arr){
        if(!filtered.includes(elem)){
            filtered.push(elem);
        }
    }

    return filtered;
}





