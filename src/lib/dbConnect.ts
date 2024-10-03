import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;  // this can be string too, depends on the db connection type
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void>{
    // TODO: remove the consoles

    if(connection.isConnected){
        console.log("DB Already Connected");
        return;
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
        connection.isConnected = db.connections[0].readyState;
        console.log("DB Connected Successfully");
    }catch(err){
        console.log("connection intterupted!!!");
        process.exit(1);
    }
}

export default dbConnect;