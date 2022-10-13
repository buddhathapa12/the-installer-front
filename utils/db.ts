import mongoose, { ConnectionStates } from "mongoose";

const connectToDatabase = async () => {
  const db = await mongoose.connect(process.env.MONGODB_URI!);
  return db;
};

const disconnectFromDatabase = async () => {
  const db = await mongoose.disconnect();
  return db;
};

const databaseConnections = { connectToDatabase, disconnectFromDatabase };
export default databaseConnections;
// const connection = { isConnected: ConnectionStates.uninitialized };

// async function connect() {
//   debugger;
//   if (connection.isConnected == ConnectionStates.connected) {
//     console.log("already connected");
//     return mongoose.connection.db;
//   }
//   if (mongoose.connections.length > 0) {
//     connection.isConnected = mongoose.connections[0].readyState;
//     if (connection.isConnected === ConnectionStates.connected) {
//       console.log("use previous connection");
//       return mongoose.connection;
//     }
//     // await mongoose.disconnect();
//   }
//   if (process.env.MONGODB_URI) {
//     const db = await mongoose.connect(process.env.MONGODB_URI);
//     console.log("new connection");
//     // connection.isConnected = db.connections[0].readyState;
//     return db;
//   }
// }

// async function disconnect() {
//   if (connection.isConnected) {
//     if (process.env.NODE_ENV === "production") {
//       await mongoose.disconnect();
//       connection.isConnected = ConnectionStates.disconnected;
//     } else {
//       console.log("not disconnected");
//     }
//   }
// }

// // function convertDocToObj(doc) {
// //   doc._id = doc._id.toString();
// //   doc.createdAt = doc.createdAt.toString();
// //   doc.updatedAt = doc.updatedAt.toString();
// //   return doc;
// // }

// const db = { connect, disconnect };
// export default db;
