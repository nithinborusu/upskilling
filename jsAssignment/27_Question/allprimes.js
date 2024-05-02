
/**
 Question
 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

 */

 function getPrimes(max){
    const primes = [];
    const sieve = Array(max+1).fill(true);
    sieve[0]=sieve[1]=false;
    for(let num =2 ; num*num <= max;num++){
        if(sieve[num]){
            for(let i = num*num;i<=max;i+=num){
                sieve[i] = false;
            }
        }
    }
    for(let i=2;i<=max;i++){
        if(sieve[i]){
            primes.push(i);
        }
    }
    return primes;
 }

 const primes = getPrimes(100);
 console.log("Prime numbers between 0 and 100:");

 console.log(primes.join('\n'));



 /*
 Output
 2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
 */