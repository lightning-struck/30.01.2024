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

// const b: string = 'qwerty'
// const a: number = 9

// function showA(i: number) {
// 	if (i < 1) {
// 		// console.log(a)
// 		// console.log(typeof a)
// 		return 'a'
// 	} else {
// 		// console.log(b)
// 		// console.log(typeof b)
// 		return 'b'
// 	}
// }
// showA(6)

// const ShowFunc: () => string = showA
// class Katya {}

// class Point {
// 	x: number;
// 	y: number;
// }
// function func() {
// let point: Point;
// }
// let point: Point = new Point();
// function move(){
// 	point.x = 1;
// 	point.y = 2;
// }
// class Point3D {
// 	x: number
// 	y: number
// 	z: number
// }

// function func3d() {
// 	let point3D: Point3D
// }

// let point3D: Point3D = new Point3D()

// function move3D() {
// 	point3D.x = 1
// 	point3D.y = 2
// 	point3D.z = 4
// }
class Point {
	x: number
	y: number
	constructor(val_1?: number, val_2?: number) {
		this.x = val_1
		this.y = val_2
	}
}

class Triangle {
	private x1: Point
	private y1: Point
	private z1: Point

	constructor(
		x1?: number,
		y1?: number,
		x2?: number,
		y2?: number,
		x3?: number,
		y3?: number
	) {
		this.x1 = new Point(x1, y1)
		this.y1 = new Point(x2, y2)
		this.z1 = new Point(x3, y3)
	}
}

let katya = new Triangle(1, 23, 4, 56, 7, 3)

// let point: Point = new Point()
