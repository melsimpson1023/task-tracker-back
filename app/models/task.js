const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  task: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  reminder: {
    type: Boolean
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)
