import * as mongoose from 'mongoose'

export const ProduseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},
    weight: {type: Number, required: true},
    price: {type: Number, required: true },
    color: {type: String, required: true},
    isDeleted: {type: Boolean, required: true}
});

export interface Product extends mongoose.Document {
    id: string;
    name: string;
    code: string;
    weight: number;
    price: number;
    color: string;
    isDeleted: boolean;
  }