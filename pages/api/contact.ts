import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' })
      return
    }

    const newMessage = {
      email,
      name,
      message,
    }
    let client

    try {
      client = await MongoClient.connect(
        'mongodb+srv://jjou33:3QtNG6DBsA2Tyz2h@cluster0.yb48xah.mongodb.net/next-hippo-blog?retryWrites=true&w=majority',
      )
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' })
      return
    }

    const db = client.db()
    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'Storing Message failed!' })
      return
    }

    client.close()
    console.log(newMessage)
    res.status(201).json({ message: 'Successfully stored message!' })
  }
}

export default handler
