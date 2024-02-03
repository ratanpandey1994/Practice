const  mongoose  = require("mongoose")

//Connection creation and creating new db
mongoose.connect("mongodb://localhost:27017/ttchannel", {useNewUrlParser: true,useUnifiedTopology: true}).then(() => console.log("Connection successfull")).catch((err) => console.log(err));

//Schema 
// A Mongoose schema defines the structure of the document, 
// default values, validators, etc.,

const playlistSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    ctype : String,
    videos : Number,
    author : String,
    active : Boolean,
    date : {
        type:Date,
        default:Date.now
    }
})

// A Mongoose model is a wrapper on the mongoose schema.
// A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

// Collection creation

const Playlist = new mongoose.model("Playlist", playlistSchema);

//Create document and insert

const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name : "Node Js",
            ctype :"Back End",
            Videos : 50,
            author : "Ratan",
            active : true
        })
        const javaPlaylist = new Playlist({
            name : "JavaScript",
            ctype :"Front End",
            Videos : 30,
            author : "Ratan",
            active : true
        })
        const mongoPlaylist = new Playlist({
            name : "MongoDB",
            ctype :"Database",
            Videos : 10,
            author : "Ratan",
            active : true
        })
        const result = await Playlist.insertMany([reactPlaylist, javaPlaylist, mongoPlaylist ]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

//createDocument();

const getDocument = async () => {
    const result = await Playlist.find({ctype: "Front End"}).select({name:1}).limit(1);
    console.log(result);
} 
getDocument();