console.log("NUEVO ARCHIVO");

document.addEventListener('DOMContentLoaded', function () {
	const display = document.getElementById('display');
	const calculator = document.querySelector('.calculator');
	const buttons = Array.from(document.querySelectorAll('.btn'));
	let broken = false;

	function setBroken(state) {
		broken = state;
		if (broken) {
			calculator.classList.add('broken');
			buttons.forEach(b => b.disabled = true);
			display.value = '¡ROTO! (Ctrl+R para reparar)';
		} else {
			calculator.classList.remove('broken');
			buttons.forEach(b => b.disabled = false);
			display.value = '';
		}
	}

	function appendToDisplay(value) {
		if (broken) return;
		display.value = display.value + value;
	}

	function clearDisplay() {
		if (broken) return;
		display.value = '';
	}

	function backspace() {
		if (broken) return;
		display.value = display.value.slice(0, -1);
	}

	function calculate() {
		if (broken) return;
		if (!display.value) return;
		try {
			const expr = display.value.replace(/%/g, '/100');
			const result = Function('return (' + expr + ')')();
			display.value = String(result);
		} catch (e) {
			display.value = 'Error';
		}
	}

	document.querySelectorAll('.btn').forEach(function (btn) {
		btn.addEventListener('click', function () {
			const val = btn.getAttribute('data-value');
			if (val === 'C') {
				clearDisplay();
				return;
			}
			if (val === '=') {
				calculate();
				return;
			}
			appendToDisplay(val);
		});
	});

	// Keyboard support and damage/repair shortcuts
	document.addEventListener('keydown', function (e) {
		// Damage with Ctrl+Z
		if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) {
			e.preventDefault();
			setBroken(true);
			return;
		}
		// Repair with Ctrl+R
		if ((e.ctrlKey || e.metaKey) && (e.key === 'r' || e.key === 'R')) {
			e.preventDefault();
			setBroken(false);
			return;
		}

		if (broken) {
			// When broken, ignore other keys
			return;
		}

		const key = e.key;
		if ((/^[0-9.+\-*/()%]$/).test(key)) {
			appendToDisplay(key);
			e.preventDefault();
			return;
		}
		if (key === 'Enter') {
			calculate();
			e.preventDefault();
			return;
		}
		if (key === 'Backspace') {
			backspace();
			e.preventDefault();
			return;
		}
		if (key === 'Escape') {
			clearDisplay();
			e.preventDefault();
			return;
		}
	});

	// Initialize not broken
	setBroken(false);
});
