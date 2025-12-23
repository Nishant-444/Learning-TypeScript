type ChaiOrder = {
	type: string;
	sugar: number;
	string: boolean;
};

function makeChai(order: ChaiOrder) {
	console.log(order);
}

function serveChai(order: ChaiOrder) {
	console.log(order);
}

interface TeaRecipe {
	water: number;
	milk: number;
}

class MasalaChaii implements TeaRecipe {
	water = 100;
	milk = 50;
}

interface CupSize {
	size: 'small' | 'large';
}

class Chai implements CupSize {
	size: 'small' | 'large' = 'small';
}

// use interfaces in class, try to avoid types in classes
// type Response = { ok: true } | { ok: false };
// class myRes implements Response {
// 	ok: boolean = true;
// }

// Literal types
type TeaType = 'masala' | 'ginger' | 'lemon';

function orderChai(t: TeaType) {
	console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
	teaLeaves: 2,
	masala: 1,
};

type User = {
	username: string;
	bio?: string;
};

const user1: User = { username: 'Nishant' };
const user2: User = { username: 'Nishant', bio: 'nishants.dev' };

type Config = {
	readonly appName: string;
	version: number;
};

const cfg: Config = {
	appName: 'nishants.dev',
	version: 1,
};

// cfg.appName = 'DayProgess';
