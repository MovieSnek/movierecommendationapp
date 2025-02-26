const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

dotenv.config();

const MONGO_URI = process.env.mongoUri;
mongoose.set('useCreateIndex', true);
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'A3ds',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: false },
  favorites: { type: [Number], required: false },
});

//Encrypt user password prior to saving in the DB
userSchema.pre('save', function (next) {
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;
  return next();
});

module.exports = mongoose.model('User', userSchema);
