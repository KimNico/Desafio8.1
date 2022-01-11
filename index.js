let express=require("express")
let path = require("path");

let app = express();
const PORT = 8080;

const db_obj = require("./db/mariadb");
const db = db_obj.client;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
    try {
      let response = await db.from("articulos");
      console.log(Object.keys(response));
    } catch (error) {
      console.log(error);
    }
  });

let RutaMensajes = require("./routes/mensaje")
let RutaProductos=require("./routes/productos")

app.use(RutaProductos)
app.use(RutaMensajes)

app.listen(PORT,()=>{
     console.log(`http://localhost:${PORT}`)
})
