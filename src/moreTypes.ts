let response: any = '42';

// forceful type assertion
// 1st way
let numericLength: number = (<string>response).length;

// 2nd way
// let numericLength: number = (response as string).length;
type Book = {
	name: string;
};

let bookString = '{"name":"1984"}';
let bookObject = <Book>JSON.parse(bookString);

console.log(bookObject);

const inputElement = document.getElementById('username') as HTMLInputElement;

let value: any;

value = 'chai';

value = [1, 2, 3];

value = 2.5;
value.toUpperCase();

let newValue: unknown;

newValue = 'chai';

newValue = [1, 2, 3];

newValue = 2.5;
if (typeof newValue === 'string') {
	newValue.toUpperCase();
}

try {
} catch (error) {
	if (error instanceof Error) {
		console.log(error.message);
	}
	console.log('Error', error);
}

const data: unknown = 'Nishant Sharma';
const strData: string = data as string;

type Role = 'admin' | 'user' | 'superadmin';

function redirectBasedOnRole(role: Role): void {
	if (role === 'admin') {
		console.log('Redirecting to admin dashboard');
		return;
	}
	if (role === 'user') {
		console.log('Redirecting to user dashboard');
		return;
	}
	role;
}

function neverReturn(): never {
	while (true) {}
}
