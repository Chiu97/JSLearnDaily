import * as mongo from 'mongodb'
import Book from '../Models/Book'
const Client = mongo.MongoClient
const uri = "mongodb://localhost:27017"

Client.connect(uri, async (err, client) => {
    if (err) return
    const db_EShop = client.db("EShop")
    const coll_books =db_EShop.collection('books')
    const res = await coll_books.findOne({
        title: '骆驼祥子'
    })
    if (res===null) {
        const book1 = new Book({ title: '骆驼祥子', Country: '中国', author: '老舍'})
        coll_books.insertOne(book1)
    }
    console.log(res)
})