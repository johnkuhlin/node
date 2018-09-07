/*
*
*  FROM
*  [1] -> [2] -> [3] -> [8] -> [10]
*                 |      |
*                 |     [9]
*                 |
*                [4] -> [5] -> [6]
*                               |
*                              [7]
*                            
*                            
*  TO                            
*  [1] -> [2] -> [3] -> [4] -> [5] -> [6] -> [7] -> [8] -> [9] -> [10]
*
*/

let linkedlist_A = {
    '1': { next: '2' },
    '2': { next: '3' },
    '3': { next: '8', child: '4' },
    '4': { next: '5' },
    '5': { next: '6' },
    '6': { child: '7' },
    '7': {},
    '8': { next: '10', child: '9' },
    '9': {},
    '10': {}
}; 

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

let linkedlist_B = {
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

let linkedlist;

function loop(x, queue) {
    if (x.child) {
        if (x.next)
            queue.push(x.next);
        loop(linkedlist[x.child], queue);
        x.next = x.child;
        x.child = undefined;
    } else if (x.next) { 
        loop(linkedlist[x.next], queue);
    } else {
        x.next = queue.pop();;
       if (x.next)
           loop(linkedlist[x.next], queue);
    }
}

linkedlist = linkedlist_A;
console.log('A before', JSON.stringify(linkedlist, null, 4));
loop(linkedlist['1'], []);
console.log('A after', JSON.stringify(linkedlist, null, 4));

linkedlist = linkedlist_B;
console.log('B before', JSON.stringify(linkedlist, null, 4));
loop(linkedlist['1'], []);
console.log('B after', JSON.stringify(linkedlist, null, 4));

