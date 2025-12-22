function getChai(kind: string | number) {
	if (typeof kind === 'string') {
		return `Making ${kind} chai...`;
	}
	return `Chai order:${kind}`;
}

function serveChai(msg?: string) {
	if (msg) {
		return `Serving ${msg}`;
	}
	return `Serving default masala chai`;
}

function orderChai(size: 'small' | 'medium' | 'large' | number) {
	if (size === 'small') {
		return `small cutting chai...`;
	} else if (size === 'medium' || size === 'large') {
		return `make extra chai`;
	}
	return `chai order #${size}`;
}

class kulhadChai {
	serve() {
		return `Serving kulhad Chai`;
	}
}
class Cutting {
	serve() {
		return `Serving Cutting Chai`;
	}
}

function serve(chai: kulhadChai | Cutting) {
	if (chai instanceof kulhadChai) {
		return chai.serve();
	}
	if (chai instanceof Cutting) {
		return chai.serve();
	}
}

type ChaiOrder = {
	type: string;
	sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		typeof obj.type === 'string' &&
		typeof obj.sugar === 'number'
	);
}

function serveOrder(item: ChaiOrder | string) {
	if (isChaiOrder(item)) {
		return `Serving ${item.type} chai with ${item.sugar}`;
	}
	return `Serving custom chai:${item}`;
}

type MasalaChai = {
	type: 'masala';
	spicelevel: number;
};

type GingerChai = {
	type: 'ginger';
	amount: number;
};

type ElaichiChai = {
	type: 'elaichi';
	aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function chaiType(Chai: GingerChai | MasalaChai | ElaichiChai) {
	switch (Chai.type) {
		case 'elaichi':
			return `${Chai.type} chai`;
		case 'ginger':
			return `${Chai.type} chai`;
		case 'masala':
			return `${Chai.type} chai`;
	}
}

function brew(order: MasalaChai | GingerChai) {
	if ('spicelevel' in order) {
		//
	}
}

// function isStringArray(arr: unknown): arr in string{

// }
