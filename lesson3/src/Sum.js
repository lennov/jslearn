export default function sum(arg){
  this.sum = arg;

  let inner = function(arg){
    if(!arg){
      return sum;
    }
    sum += arg;
    return inner;
  }

  return inner;
}
