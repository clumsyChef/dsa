/* 
    Steps:

    Step 1: keep dividing the array in 2 elements untill be get 1 element per array
    so array [1,2,3,4,5,6,7,8] becomes 
    [
        [
            [
                [1],[2]
            ],
            [
                [3],[4]
            ]
        ],
        [
            [
                [5],[6]
            ]
            ,[
                [7],[8]
            ]
        ]
    ]
     How ??
    first divide = [[1,2,3,4], [5,6,7,8]]
    second divide = [[[1,2], [3,4]], [[5,6], [7,8]]]   
    third divide = [[[[1],[2]],[[3],[4]]],[[[5],[6]],[[7],[8]]]]
    
    Step 2: keep merging the array in the same order one by one
*/

const unsortedArr = [8, 3, 5, 4, 9, 7, 6, 1, 2];

const divide = (arr) => {
	if (arr.length <= 1) return arr;
	const midPoint = Math.floor(arr.length / 2);
	const leftPart = divide(arr.slice(0, midPoint));
	const rightPart = divide(arr.slice(midPoint));

	return merging(leftPart, rightPart);
};

const merging = (leftPart, rightPart) => {
	let final = [];
	let i = 0; // leftPart
	let j = 0; // rightPart
	while (i < leftPart.length || j < rightPart.length) {
		if (leftPart[i] < rightPart[j]) {
			final.push(leftPart[i]);
			i++;
		} else if (leftPart[i] > rightPart[j]) {
			final.push(rightPart[j]);
			j++;
		} else {
			if (leftPart[i]) {
				final.push(leftPart[i]);
				i++;
			}
			if (rightPart[j]) {
				final.push(rightPart[j]);
				j++;
			}
		}
	}

	return final;
};

// get the unsorted array divided
const dividedArray = divide(unsortedArr);

// now we merge the array
// const mergedArray = merging(dividedArray);

console.log(dividedArray);
