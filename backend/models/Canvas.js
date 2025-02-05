const mongoose = require('mongoose');

const CanvasSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  nodes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ThinkTreeNode'
  }],
  edges: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ThinkTreeEdge'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Canvas', CanvasSchema);