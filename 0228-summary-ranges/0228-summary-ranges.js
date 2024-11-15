/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	nums.push(Infinity);
	if (nums.length === 0) {
		return [];
	}
	let res = [];
	let range = "";
	for (let i = 0; i < nums.length - 1; i++) {
		if (range === "") {
			range = nums[i];
			if(nums[i] + 1 !== nums[i + 1]){
				res.push(range.toString());
				range=""
			}
		} else {
			if (nums[i] + 1 !== nums[i + 1]) {
				range = range + "->" + nums[i];
				res.push(range);
				range = "";
			}
		}
		
	}
	if (range.length !== 0) {
		res.push(range.toString());
	}
	return res;
};

//cases
//1,2
//1,3
//5