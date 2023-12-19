import mongoose from 'mongoose';
import config from '../config/config.js'
export const init = async () => {
    try {
        const URI = config.db.mongodb;
        await mongoose.connect(URI);
        console.log('Database connected 🚀');
    } catch (error) {
        console.error('Error to connect to database', error.message);
    }
};