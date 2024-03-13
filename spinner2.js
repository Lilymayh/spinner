const spinner = function(spin, delay) {
	setTimeout(() => {
		process.stdout.write(spin);
	}, delay);
};

spinner('\r|   ', 100);
spinner('\r/   ', 300);
spinner('\r-   ', 500);
spinner('\r\\   ', 700);
spinner('\r|   ', 900);
spinner('\r/   ', 1100);
spinner('\r-   ', 1300);
spinner('\r\\   ', 1500)



