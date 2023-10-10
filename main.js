let a  = parseInt(Math.random() * 100)
console.log(a);
if (a % 2 == 0) {
    console.log('juft son');
}else{
    console.log('toq son');
}
    
let random  = parseInt(Math.random() * 100)
console.log(random);
if (random % 3 ==  0) {
        console.log("random son 3ga bo'lindi");
}else if (random % 5 == 0){
        console.log("random son 5ga bo'lindi");
}else if (random % 3 == 0 && random %  5 == 0) {
        console.log("random son ham 3ga ham 5 ga bo'linadi");
} else{
    console.log("random son ham 3ga ham 5 ga bo'linmadi");
}
