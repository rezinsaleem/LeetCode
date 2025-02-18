var smallestNumber = function(pattern) {
    // Input: pattern = "IIIDIDDD"
    // Output: "1 2 3 5 4 8 7 6 9"
    const n = pattern.length + 1;
    const res = new Array(n).fill(0).map((el, index)=>index+1);
    for(let i = 0 ; i< n-1; i++)
    {
        if(pattern[i] == 'I'){
            continue;
        }
        else if(pattern[i] === 'D') {
            // swap i & i+1
            [res[i], res[i+1]] = [res[i+1], res[i]];
            for(let j = i-1; j>=0; j--) {
                if( (pattern[j] === 'I' && res[j] < res[j+1]) || (pattern[j] === 'D' && res[j] > res[j+1]) ) {
                    // valid at j
                    break;
                }
                else {
                        // swap j & j+1
                        [res[j], res[j+1]] = [res[j+1], res[j]];
                }
            }
        }
    }
    return res.join(''); 
};