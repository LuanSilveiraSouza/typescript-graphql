import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	platform: {
		type: String,
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
});

export default mongoose.model('Games', Schema);
