const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (msg, user) => console.log(user, ":", msg));

process.stdin.on("data", (data) => {
	const input = data.toString().trim();
	if (input === "exit") {
		emitter.emit("customEvent", "GoodBye!!!", "process");
		process.exit();
	}
	emitter.emit("customEvent", input, "terminal");
});
