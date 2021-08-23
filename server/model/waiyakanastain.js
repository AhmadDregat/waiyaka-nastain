const mongoose = require('mongoose')

const Schema = mongoose.Schema


const newsSchema = new Schema({
    title : String,
    description: String,
    media: [String],
    date: Date

})
const infoSchema = new Schema({
    name : String,
    phone: Number,
    location: String,
    logo: String ,
    email:String,
    facebook_Url:String,
    instagram_Url:String,
    youtube_Url:String,

})

const usersSchema = new Schema({
    name: String,
    password: String,
    phone: Number,
    address: String,
   
})/// note lotem
const mesbahaSchema =new Schema({

    tsabeh: [String],
    count_tsabeh:Number, 
    user_id:{type: Schema.Types.ObjectId, ref: 'User'}
    

}) 
const relationshipsSchema = new Schema({
    name: String,
    image: String,
    category: String,
    description: String,
    audio:String


})

const Relationships = mongoose.model("Relationships", relationshipsSchema)
const Mesbaha = mongoose.model("Mesbaha", mesbahaSchema)
const Info = mongoose.model("Info", infoSchema)
const News = mongoose.model("News", newsSchema)
const User = mongoose.model("User", usersSchema)

module.exports = {
    News: News,
    Relationships: Relationships,
    User: User,
    Mesbaha:Mesbaha,
    Info:Info
 
}