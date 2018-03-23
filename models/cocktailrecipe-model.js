const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user-model');

const myCocktailrecipeSchema = new Schema ({

name: {
  type: String,
  required: [true, 'The name of the dish is required!']
},

ingredient: {
  type: Array,
  defualt: []
},

directions: {
  type: String,
  defualt: []
},

picture: {
  type: String,
  default: ''
},

user: { type: Schema.Types.ObjectId, ref: 'User', required: true},

},
    {
      timestamps: true
    }
  );

const CocktailRecipeModel = mongoose.model('Recipe', myCocktailrecipeSchema);

module.exports = CocktailRecipeModel;
