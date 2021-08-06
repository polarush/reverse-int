module.exports = function reverse (n) {
    let numArr = String(n).split('')
	return parseInt(numArr.reverse().join(''))

}
