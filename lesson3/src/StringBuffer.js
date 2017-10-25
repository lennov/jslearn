"use strict";

export default function makeBuffer() {
  let buffer = new StringBuffer();
    return buffer.append;
}


class StringBuffer{

  constructor(){
    let str = "";

    this.append = function(part) {
        if (!part) {
            return str;
        }
        str += part;
    }

    this.append.clear = function() {
        str = "";
    }
  }
}
