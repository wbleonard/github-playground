function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var hp = {v1:0,v2:0};

function hp1(hp){
    hp.v1++;
    getRandomInt(1,4000);
    return hp;
}

function hp2(hp){
    hp.v2++;
    getRandomInt(1,4000);
    return hp;
}

function fight(){
    for (i = 0; i < 500 ; i++){
        hp1(hp);
        hp2(hp);
    }
}

fight();

console.log(hp);