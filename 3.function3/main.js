function alphabetSort(message){
var arr=[];
let len = message.length;
let temp;
	for(let i = 0; i < len; i++){
  	arr.push(message[i]);
  }
  for(let i=0; i < arr.length;i++){
  	for(let j=i+1; j <arr.length;j++){
    	if(arr[j] < arr[i]){
      temp=arr[j];
      arr[j]=arr[i];
      arr[i]=temp;
      }	
    }
  }
  return arr.join("");
}
console.log(alphabetSort('zyabg')); // should return 'ehllo'