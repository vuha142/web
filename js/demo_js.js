var x = 10;// global toàn cục

let y = 20;
const z = 30;
k = 10;

x = "hello world"
console.log(x);
let f = y>10;
let u = false;
if(y>10){
    console.log("y lon hon 10");
js    console.log("y nho hon 10");
}


for (let i=0;i<10;i++){
    console.log("xin chao"+i);
}
x = "10";
y = 20;
x = parseInt(x)
console.log(x+y);
k = "hello";
k = parseInt(k);
if(isNaN(k)){
    console.log("k phai so");
}else {
    console.log(k);
}
let ary = [];
ary[3]= "hello";
ary[4]= [5, 6 ,"xin chao"];
ary[4][3] = [3.14,1,"a"]
sayHello();
function sayHello() {
    console.log("Hello everybody");
}
function sum(a,b) {
    return a+b;
}
c = sum(1,6);
console.log(c);

let arr = [5,1,7,9,12,2];
arr.map(function (e) {
    console.log(e);
});
arr.push(77);
function check snt(n) {
    if(n<2) return false;
    if(n<=3) return true;
    for (let i=2;i<=math.sqrt(n);i++){
        if (n%i==0)return false;
    }
    return true;
}

let snt = [];
for (let i=0;i<100;i++){
    if(checkSNT(i))
        snt.push(i);
}
for (let i=0;i< snt.length;i++){
    console.log(snt[i]);
}
snt.map(function (e) {
    console.log(e);
});

snt.map(e=>{
    console.log(e)
});
