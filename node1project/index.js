import  express from 'express'; //importing express module
import path from 'path';//path is a core module of nodejs


const app = express();//creating the express server

app.use(express.static(path.join(path.resolve(), "public")));//use to locate the current directory

app.set("view engine", "ejs");//setting the view engine to ejs
app.get("/", (req, res) => {
    // const pathLocation = path.resolve(); //use to locate the current directory
    // res.sendfile(path.join(pathLocation, "./index.html"));//use to locate the current directory 
    // res.sendfile("index.html");//its is common to use this in the production to send the file as per response
    res.render("index", {name:"Mrhabe3b"});
});

app.server = app.listen(3000, () => {// 3000 is the port number
    console.log("server is running on port 3000");//    
});
// console.log("welcome to node1project");
