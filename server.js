import express from "express";
import exphbs from "express-handlebars";
import weatherRoutes from "./routes/weather.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('', weatherRoutes );


app.listen(PORT, () => {
  console.log('Server running on port: ', PORT);
})