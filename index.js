const vespa = {
	log: (...arguments) => console.log(...arguments),
	info: (...arguments) => console.info(...arguments),
	error: (...arguments) => console.error(...arguments)
};
module.exports = vespa;
