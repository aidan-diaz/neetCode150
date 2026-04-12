//take a letter, how many instances exist in world
//”Hello World” “l” input, return 3, return type is int
//case sensitive

function countFrequency(str, char) {
	let count = 0
	for(let i = 0; i < str.length; i++){
		if(str[i] === char){
            count++
        }
    }
    return count

    // const map = {}

    // for(let i = 0; i < str.length; i++) {
    //     if(!map[i]){
    //         map[i] = 1
    //     } else {
    //         map[i] += 1
    //     }
    // }
}

console.log(countFrequency('Hello world', 'l'))