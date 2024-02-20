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
// class Point {
// 	x: number
// 	y: number
// 	constructor(val_1?: number, val_2?: number) {
// 		this.x = val_1
// 		this.y = val_2
// 	}
// }

// class Triangle {
// 	private x1: Point
// 	private y1: Point
// 	private z1: Point

// 	constructor(
// 		x1?: number,
// 		y1?: number,
// 		x2?: number,
// 		y2?: number,
// 		x3?: number,
// 		y3?: number
// 	) {
// 		this.x1 = new Point(x1, y1)
// 		this.y1 = new Point(x2, y2)
// 		this.z1 = new Point(x3, y3)
// 	}
// }

// let katya = new Triangle(1, 23, 4, 56, 7, 3)

// let point: Point = new Point()
class Shape {
	lineWidth: number
	color: string
	constructor() {
		console.log('Конструктор Shape')
	}
}
class Line extends Shape {
	x1: number
	y1: number
	x2: number
	y2: number
	constructor(_x1: number, _y1: number, _x2: number, _y2: number) {
		super()
		this.x1 = _x1
		this.y1 = _y1
		this.x2 = _x2
		this.y2 = _y2
		console.log('Конструктор Line')
	}
}
class Triangle extends Shape {
	x1: number
	y1: number
	x2: number
	y2: number
	x3: number
	y3: number
	constructor() {
		super()

		console.log('Конструктор Triangle')
	}
}
class Rectangle extends Shape {
	x1: number
	y1: number
	x2: number
	y2: number
	constructor() {
		super()
		console.log('Конструктор Rectangle')
	}
}
class Ellipse extends Shape {
	x1: number
	y1: number
	width: number
	height: number
	constructor() {
		super()
		console.log('Конструктор Ellipse')
	}
}

const shapes: Shape[] = []
shapes[0] = new Line(10, 10, 10, 10)
shapes[1] = new Triangle()
shapes[2] = new Rectangle()
shapes[3] = new Ellipse()

shapes[0].color = 'red'
shapes[0].lineWidth = 2

const shapeA = <Line>shapes[0]
const shapeB = <Line>shapes[1]

if (shapes[0] instanceof Line) {
	const line1 = <Line>shapes[0]
}
if (shapes[1] instanceof Line) {
	const line2 = <Line>shapes[1]
}

class Qwerty {
	dimensions: string
	price: string
	name: string
	constructor() {
		console.log('Конструктор Qwerty')
	}
}
class Chaire extends Qwerty {
	legs: number
	back: boolean
	leg_height: number
	constructor(_legs: number, _back: boolean, _leg_height: number) {
		super()
		this.legs = _legs
		this.back = _back
		this.leg_height = _leg_height
		console.log('Конструктор Chaire')
	}
}
class Closet extends Qwerty {
	handle_material: string
	doors: number
	constructor(_handle_material: string, _doors: number) {
		super()
		this.handle_material = _handle_material
		this.doors = _doors
		console.log('Конструктор Rectangle')
	}
}
class Shelf extends Qwerty {
	size: number
	segment: number
	constructor(_size: number, _segment: number) {
		super()
		this.size = _size
		this.segment = _segment
		console.log('Конструктор Rectangle')
	}
}
class Table extends Qwerty {
	countertop_area: number
	legs: number
	constructor(_countertop_area: number, _legs: number) {
		super()
		this.countertop_area = _countertop_area
		this.legs = _legs
		console.log('Конструктор Rectangle')
	}
}
