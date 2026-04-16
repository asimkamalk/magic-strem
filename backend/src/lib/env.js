import dotenv from 'dotenv'
import e from 'express';

dotenv.config();

export const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
};