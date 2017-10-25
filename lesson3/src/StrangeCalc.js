"use strict";

export function one(funct){
   if(funct){
     return funct(1);
   }
   return 1;
}

export function two(funct){
   if(funct){
     return funct(2);
   }
   return 2;
}

export function three(funct){
   if(funct){
     return funct(3);
   }
   return 3;
}

export function four(funct){
   if(funct){
     return funct(4);
   }
   return 4;
}

export function five(funct){
   if(funct){
     return funct(5);
   }
   return 5;
}

export function six(funct){
   if(funct){
     return funct(6);
   }
   return 6;
}

export function seven(funct){
    if(funct){
       return funct(7);
    }
 return 7;
}

export function eight(funct){
   if(funct){
     return funct(8);
   }
   return 8;
}

export function nine(funct){
   if(funct){
     return funct(9);
   }
   return 9;
}

export function zero(funct){
   if(funct){
     return funct(0);
   }
   return 0;
}


export function times(argument){
    let arg1 = argument;

    return function(arg2){
        return arg1 * arg2;
    };
}

export function plus(argument){
    let arg1 = argument;

    return function(arg2){
        return arg1 + arg2;
    };
}

export function minus(argument){
    let arg1 = argument;

    return function(arg2){
        return arg2 - arg1;
    };
}

export function dividedBy(argument){
    let arg1 = argument;

    return function(arg2){
        return arg2 / arg1;
    };
}
