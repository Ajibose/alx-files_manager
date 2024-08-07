import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const dbHOST = process.env.DB_HOST || 'localhost';
    const dbPORT = process.env.DB_PORT || 27017;
    this.db = process.env.DB_DATABASE || 'files_manager';

    this.client = new MongoClient(
      `mongodb://${dbHOST}:${dbPORT}`,
      { useNewUrlParser: true, useUnifiedTopology: true },
    );

    this.client.connect();
  }

  isAlive() {
    return !!this.client && !!this.client.topology && this.client.topology.isConnected();
    // return this.client.isConnected();
  }

  async nbUsers() {
    try {
      const userCount = await this.client.db().collection('users').countDocuments();
      return userCount;
    } catch (e) {
      console.error('Error counting documents', e);
      return null;
    }
  }

  async nbFiles() {
    try {
      const fileCount = await this.client.db().collection('files').countDocuments();
      return fileCount;
    } catch (e) {
      console.error('Error counting documents', e);
      return null;
    }
  }
}

const dbClient = new DBClient();
export default dbClient;
