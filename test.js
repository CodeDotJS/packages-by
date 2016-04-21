import test from 'ava';
import fn from './';

test(async t => {
	const user = await fn('rishi');

	t.is(user.name, 'Rishi Giri');
});
