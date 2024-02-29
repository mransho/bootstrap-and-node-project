const express = require("express");
const app = express();
const port =process.env.PORT || 5501;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
var methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static("puplic"));
const allRoutes = require("./routes/allRoutes");
app.use(allRoutes);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

mongoose
  .connect(
    "mongodb+srv://test_pro:31jzXxmTTOcBTRLS@cluster0.jsojqea.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
