export default function sum(arg){
  let sum = arg;

  let inner = function(arg){
    if(!arg){
      return sum;
    }
    sum += arg;
    return inner;
  }

  return inner;
}
