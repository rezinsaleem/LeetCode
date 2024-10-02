var arrayRankTransform = function(arr) {
  let num=new Set(arr);
  let num1=[...num].sort((a,b)=>(a-b));
   let pos=[];
    for(i=0;i<arr.length;i++){
        pos.push(num1.indexOf(arr[i])+1)
    }
    return pos
};