const RINGCOUNT = 3;

const pl = (s) => console.log(s);
var step = 0;

// n=number of ring, f=from, t=to, u=using
function movering(n, f, t, u) {
	if (n == 1) {
		step++;
		pl(`Step ${step}: Move ring 1 from ${f} to ${t}`);
	} else {
		movering(n - 1, f, u, t)
		step++;
		pl(`Step ${step}: Move ring ${n} from ${f} to ${t}`);
		movering(n - 1, u, t, f)
	}
}

pl('Tower of Hanoi');
pl(`Move ${RINGCOUNT} rings`);
movering(RINGCOUNT, "A", "C", "B");
