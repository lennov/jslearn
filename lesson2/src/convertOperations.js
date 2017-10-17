"use strict";

export default function convertOperations(operations){

    let initialValue = {};

    let process = function(prev, currentItem){
        let existed = prev[currentItem.date];
        if(existed != null){
            existed.operations.push(currentItem);
            addUniqueLinks(existed.links, currentItem.links);
            return {
                [currentItem.date]: existed
            };
        }else{
            return Object.assign({}, prev, {
                [currentItem.date]: {
                        operations: [currentItem],
                        links: currentItem.links
                }
            });
        }
    };

    return operations.reduce(process, initialValue);
}

function isUniqueLink(arr, newLink){
    let result = true;
    arr.forEach(link => {
        if(link.name === newLink.name){
            result = false;
        }
    })
    return result;
}

// function isUniqueLink(arr, newLink){
//
//     let result = (arr.filter(function(link){
//         return (link.name === newLink.name);
//     }).length > 0);
//     console.log(arr);
//     console.log(newLink);
//     console.log("Found: "+result);
//     //let res = (result.length > 0);
//     return result;
// }

function addUniqueLinks(links, newLinks){
    newLinks.forEach(link => {
        if(isUniqueLink(links, link)){
            links.push(link);
        }
    })
}
