// const c: [number, number, string, number, number] = [1, 2, 'qwea', 4, 6]
// const d: boolean = true
// const e: number = 1.123

// console.log(d, e)
// console.log(typeof e, typeof d, typeof a)

// const func1 = function qwerty() {
// 	console.log(a)
// }
// console.log(func1)
// console.log(typeof func1)

// const myName: string = 'Katya'
// console.log(typeof myName)

// const arr: any[] = [1, 2, 3]

//  () => void
// const v: () => void = function f() {}
// const b: string = 'qwerty'
// const a: number = 9
// function showA() {
// 	let i = 0

// 	if (i < 1) {
// 		console.log(a)
// 	} else {
// 		console.log(b)
// 	}
// }

const b: string = 'qwerty'
const a: number = 9

function showA(i: number) {
	if (i < 1) {
		// console.log(a)
		// console.log(typeof a)
		return 'a'
	} else {
		// console.log(b)
		// console.log(typeof b)
		return 'b'
	}
}
showA(6)

const ShowFunc: () => string = showA
