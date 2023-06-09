import IBlog from '../types/model/IBlog.js';

import { model, Schema } from 'mongoose';

const blogSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      enum: ['markdown'],
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IBlog>('Blog', blogSchema);
