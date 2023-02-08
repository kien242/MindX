let n= 100;
let sum = 0;
let index_1;
for (index_1 = 1; index_1 <=n; index_1++) {
    if ( n % index_1 === 0) {
      sum = sum +index_1;
    }
    console.log(sum);
}

// 
let index;
let sum_nguyen_to=0;
while ( index >0 && index <=n){
    if (checknguyento(index)){
        sum_nguyen_to = sum_nguyen_to + index;
        index ++
    } else {index++}

    console.log(sum_nguyen_to)
}

function checknguyento(n){
    sqrt_n=Math.sqrt(n);
    for( i=2; i<=sqrt_n;i++){
        if (n%i === 0){
            return true;
        }
        else {
            return false;
        }
    }
}