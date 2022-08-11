import { redis } from "redis";

const client = redis.createClient({
  url: "redis://:Zzq8F22LPZv3@10.160.20.29:6379/9"
});

const redisConfig = {
  port: 6379,

  host: "10.160.20.29",

  password: "Zzq8F22LPZv3",

  autoResubscribe: false,

  db: 9
};

const arrivedListRequestsName = "arrivedRequests"; // List of the request names

const channelArrivedRequest = "arrivedRequest";

var lastError = "";

//let redis = null;

let redisPubSub = null;

const createConnection = async () => {
  try {
    await client.connect();
  } catch (error) {
    let g = "";
  }

  //redis = new Redis(redisConfig);
};

// Insert request name to the arrived list and store the request detailes

const insertNewRequest = async (key) => {
  await createConnection();

  await client.set(arrivedListRequestsName, key);

  const publisher = client.duplicate();

  await publisher.connect();

  await publisher.publish(channelArrivedRequest, "arrived");

  /*let tran = redis.multi();

    tran.rpush(arrivedListRequestsName,key);  

    let result = await tran.exec();

    redis.publish(channelArrivedRequest,'arrived'); */
};

export default {
  insertNewRequest
};
