function camelize(wordsSplit){
    let spliting = wordsSplit.split('-');
    // console.log(spliting);

    spliting = spliting.map(splited => splited.charAt(0).toUpperCase() + splited.slice(1))
    // console.log(spliting)

    let joined = spliting.join('');
    return joined;
}

function filterRange(arr, a, b){
    NewArr = arr.filter((num) => num >= a);
    NewArr = NewArr.filter((nnum) => nnum <= b);

    return NewArr;

}
