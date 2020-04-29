const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

//server static assets
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	//set static folder
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port${PORT}`));
