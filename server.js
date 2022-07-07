import('express-async-errors');
dotenv.config();
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import path from 'path';
import express from 'express';
// import cors from 'cors';

// import helmet from 'helmet';
// import xss from 'xss-clean';
// import mongoSanitize from 'express-mongo-sanitize';

// error handler
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

import connectDB from './db/connect.js';
// import authenticateUser from './middleware/authentication.js';

// routers
import authRouter from './routes/auth.js';
import jobsRouter from './routes/jobs.js';

// app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ msg: 'Welcome!' });
});
app.get('/api/v1', (req, res) => {
	res.json({ msg: 'API' });
});
// app.use(helmet());
// // not needed if client and back-end on the same server (heroku)
// app.use(xss());
// app.use(mongoSanitize());

// only when ready to deploy
// app.use(express.static(path.resolve(__dirname, './client/build')))

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

// only when ready to deploy
// app.get('*', function (request, response) {
//   response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
// })

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}...`),
		);
	} catch (error) {
		console.log(error);
	}
};

start();
