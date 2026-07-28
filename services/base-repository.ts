import { Collection, Document } from "mongodb";
import { getDatabase } from "./mongodb";

/**
 * Abstract Base Repository class to separate raw database access
 * from service / controller business logic.
 */
export abstract class BaseRepository<T extends Document> {
  protected collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  /**
   * Helper to retrieve the MongoDB Collection instance
   */
  protected async getCollection(): Promise<Collection<T>> {
    const db = await getDatabase();
    return db.collection<T>(this.collectionName);
  }
}
