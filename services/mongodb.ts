import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;
export let clientPromise: Promise<MongoClient>;

if (uri) {
  if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the MongoClient is
    // preserved across module reloads caused by Hot Module Replacement (HMR).
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    // In production mode, it is best not to use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
} else {
  // Safe fallback to prevent crash at build time when MONGODB_URI is undefined.
  // Returns a pending promise so that NextAuth adapter initialization completes
  // without triggering unhandled promise rejections during static page compilation.
  clientPromise = new Promise<MongoClient>(() => {});
}

/**
 * Returns a connected MongoClient instance.
 */
export async function getMongoClient(): Promise<MongoClient> {
  return clientPromise;
}

/**
 * Helper to fetch a database instance.
 */
export async function getDatabase(dbName?: string) {
  const connection = await getMongoClient();
  return connection.db(dbName);
}
