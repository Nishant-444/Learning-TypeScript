let subs: number | string = '10';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle';

apiRequestStatus = 'success';

const orders = ['12', '41', '45', '90'];

let currentOrder: string | undefined;

for (const order of orders) {
	if (order === '32') {
		currentOrder = order;
		break;
	}
	currentOrder = '11';
}

console.log(currentOrder);
