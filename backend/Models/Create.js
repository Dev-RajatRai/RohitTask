import mongoose from 'mongoose';

const CreateModel = new mongoose.Schema({
  name: {
    type: String,
  },
});

export default mongoose.model('creates', CreateModel);
