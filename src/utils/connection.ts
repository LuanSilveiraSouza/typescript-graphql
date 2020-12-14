import mongoose from 'mongoose';

mongoose.connect(
	'mongodb+srv://luan:9YQNa68dfrQO94SH@cluster0.9x3yg.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true }
);
