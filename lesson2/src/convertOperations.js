"use strict";

export default function convertOperations(operations) {

    let process = function(prev, currentItem) {
        if (!prev[currentItem.date]) {
            prev[currentItem.date] = {
                operations: [currentItem],
                links: [...currentItem.links].reduce((prev, current) => {
                    if (isUniqueLink(prev, current)) {
                        prev.push(current);
                    }
                    return prev;
                }, [])
            };
            return prev;
        } else {
            prev[currentItem.date].operations.push(currentItem);
            addUniqueLinks(prev[currentItem.date].links, currentItem.links);
            return prev;
        }
    };

    return operations.reduce(process, {});
}

function isUniqueLink(links, newLink) {
    return (links
        .filter(link => (link.name === newLink.name))
        .length === 0);
}

function addUniqueLinks(links, newLinks) {
    newLinks.forEach(link => {
        if (isUniqueLink(links, link)) {
            links.push(link);
        }
    })
}

// function isUniqueLink(arr, newLink){
//     let result = true;
//     arr.forEach(link => {
//         if(link.name === newLink.name){
//             result = false;
//         }
//     })
//     return result;
// }
