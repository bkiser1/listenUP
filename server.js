const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3000;

const corsOptions = {
	origin: "https://kiser-new-app.herokuapp.com/",
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.options("*", cors());
app.use("/", routes);

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

const corsOptions = {
	origin: "https://your-app-name.herokuapp.com",
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.options("*", cors());
app.use("/", routes);
