const MongoClient = require("mongodb").MongoClient
require('dotenv').config();

exports.getDevicesAndStatus = async (req, res) => {
    let result = await connectToDBMakeQuery(req.params.collection1, req.params.collection2);
    console.log("DB CONNECTED");
    
    res.json(result)
}


const connectToDBMakeQuery = (collection1, collection2) => {
    return new Promise((resolve) => {
        MongoClient.connect(process.env.MONGODB_URL, function(err, db) {
            if(err) throw err;
            let dbo = db.db("__CONCOX__")
            dbo.collection(collection1).find().sort({createdAt: -1}).limit(30).toArray((err, result) => {
                if(err) throw err;

                let obj = {};

                result.forEach(device => {
                    dbo.collection(collection2).find({device: device.id}).limit(50).toArray((err, result) => {
                        if(err) throw err;
                        obj.device = result;
                    })
                })

                obj.name = "adwait kulkarni"
                obj.contact = "adwaitkulkarni2211@gmail.com"

                resolve(obj)
            })
        })
    })
}