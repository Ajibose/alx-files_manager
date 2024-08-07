import dbClient from '../utils/db'

class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body
    if (!email) {
      res.status(400).send('Missing email');
      res.end();
      return;
    }

    if (!(password)) {
      res.status(400).json({ error: 'Missing password' });
      res.end(); 
      return
    }

    const user = await dbClient.getUserbyEmail(email);
    if (user) {
      res.status(400).json({ error: 'Already exist' });
      res.end();
      return;
    }

    const result = await dbClient.createUser(email, password);
    res.status(201).json({ id: result.insertedId, email });
    res.end();
  }
}

export default UsersController
