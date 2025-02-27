//let a= 5; b=6; c=(a+b);
//alert(c)

// 1. Array Simples

function simplesArray(arr) //nao usar array como parametro
{ 
    let soma = 0;

    for(i=0;i<ar.length;i++){
        soma += ar[i]
    }
    return soma;
}

let arrs = [1+2+3]
alert(arrs);


// 2. Compare Gemeos
function compareTriplets(a,b){
    let AliceBob = [0 , 0];

    for(let i=0;i<3;i++){
        if(a[i]>b[i]){
            AliceBob[0]++; //alice +1
        }
        else if(a[i]<b[i]){
            AliceBob[1]++; //bob +1
        }
        }
        return AliceBob;

}
let resultado = compareTriplets([6, 6, 6], [3, 6, 10]);
alert(resultado);
     
// 3. VeryBigSum

function VeryBigSum(ar) //ar é só parametro
{
    let soma = 0
    for(let i=0;i<ar.length;i++){
        soma = soma + ar[i];
    }

    return soma;
}

let resultad = VeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
alert(resultad);  // Saída: 5000000015

// 4. Plusminus

function plusMinus(arr){
    let positivo = 0
    let negativo = 0
    let zero = 0

    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            positivo++
        }
        else if(arr[i]<0){
            negativo++
        }
        else {
            zero++
        }
            
    }
    let total=arr.length
    
    console.log((positivo / total).toFixed(6));  
    console.log((negativo / total).toFixed(6));  
    console.log((zero / total).toFixed(6));
}

    //alert((positivo / total).toFixed(6));  // Fração de positivos
    //alert((negativo / total).toFixed(6));  // Fração de negativos
    //alert((zero / total).toFixed(6));     // Fração de zeros

arrs = [1,1,0,-1,-1];
plusMinus(arrs)


// 5. StairCase

function stairCase(n){
    let result='';

    for(let row = 0; row<n;row++){
        let stair='';

        for(let column = 0; column<n;column++){
        if(column <= row){
            stair+= '#';
        }
        else{
            stair+=' ';

        }  
    }

    result += stair + '\n';
    }  
    alert(result);
}
stairCase(6);

