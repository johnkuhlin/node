/*
*
*  FROM
*  [1] -> [2] -> [8] -> [10]
*          |      |
*          |     [9]
*          |        
*         [3] -> [4] -> [7]
*                 |
*                [5] -> [6]
*                            
*                            
*  TO                            
*  [1] -> [2] -> [3] -> [4] -> [5] -> [6] -> [7] -> [8] -> [9] -> [10]
*
*/

let linkedlist = {
    '1': { next: '2' },
    '2': { next: '8', child: '3' },
    '3': { next: '4' },
    '4': { next: '7', child: '5' },
    '5': { next: '6' },
    '6': {},
    '7': {},
    '8': { next: '10', child: '9' },
    '9': {},
    '10': {}
}; 

function node(x, placeholder) {
    if (x.child) {
        if (x.next) {
            if (!placeholder)
                placeholder = [];
            placeholder.push(x.next);
            node(linkedlist[x.child], placeholder);
        } else {
            node(linkedlist[x.child], placeholder);
        }
        x.next = x.child;
        x.child = undefined;
    } else if (x.next) { 
        node(linkedlist[x.next], placeholder);
    } else {
        x.next = placeholder.pop();;
       if (x.next)
           node(linkedlist[x.next], placeholder);
    }
}

console.log('before', JSON.stringify(linkedlist, null, 4));
node(linkedlist['1']);
console.log('after', JSON.stringify(linkedlist, null, 4));

