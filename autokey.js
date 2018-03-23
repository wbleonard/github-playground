var dict = {};

function lets_key(key,val){
    dict[key]=val;
    return dict;
}

for (i = 0; i < 5 ; i++){
    var key = "key" + i;
    lets_key(key, Date.now());
}

console.log(dict);