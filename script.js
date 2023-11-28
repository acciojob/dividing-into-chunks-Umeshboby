const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let myInteger = parseInt(n);
	let i=0 , ans=[];
	while(i<=arr.length-1){
		ans.push(arr.slice(i,i+2));
		i=i+myInteger;
	}
	return ans;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
