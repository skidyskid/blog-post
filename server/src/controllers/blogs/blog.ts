import { Request, Response } from 'express';
import IBlog from '../../types/model/IBlog.js';
import Blog from '../../models/blog.js';
import User from '../../models/user.js';
import paginate from '../../helpers/paginate.js';

import mongoose from 'mongoose';

const getBlogs = async (req: Request, res: Response) => {
  try {
    const page: number = req.query.page
      ? parseInt(req.query.page as string)
      : 1;

    const { documents: blogs, totalPages } = await paginate(Blog, page);

    res.status(200).json({ dataBlogs: [...blogs], totalPages });
  } catch (err) {
    if (!res.headersSent) {
      if (err instanceof Error) {
        res.status(400).json({ error: { message: err.message } });
      } else {
        res.status(500).json({ error: { message: 'An error occured' } });
      }
    }
  }
};

const getBlogsByUserId = async (req: Request, res: Response) => {
  try {
    const userId: IBlog['userId'] = req.params.id;

    const page: number = req.query.page
      ? parseInt(req.query.page as string)
      : 1;

    const { documents: blogs, totalPages } = await paginate(Blog, page, 10, {userId: userId});

    res.status(200).json({ dataBlogs: [...blogs], totalPages });
  } catch (err) {
    if (!res.headersSent) {
      if (err instanceof Error) {
        res.status(400).json({ error: { message: err.message } });
      } else {
        res.status(500).json({ error: { message: 'An error occured' } });
      }
    }
  }
};

const getBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json(null);
    }

    const blog = await Blog.findById(id);

    if (!blog) throw 'Unable to find blog';

    res.status(200).json({ ...blog._doc });
  } catch (err) {
    if (!res.headersSent) {
      if (err instanceof Error) {
        res.status(400).json({ error: { message: err.message } });
      } else {
        res.status(500).json({ error: { message: 'An error occured' } });
      }
    }
  }
};

const createBlog = async (req: Request, res: Response) => {
  try {
    const body = req.body as Pick<
      IBlog,
      'title' | 'snippet' | 'body' | 'format'
    >;
    const user = await User.findById(req.user?.id);

    if (!user) throw 'Unable to find user';

    const blog: IBlog = new Blog({
      userId: req.user?.id,
      title: body.title,
      snippet: body.snippet,
      body: body.body,
      format: body.format,
    });

    const newBlog = await blog.save();
    if (!newBlog) throw 'Unable to create blog';

    res.status(201).json({ id: newBlog._doc._id });
  } catch (err) {
    if (!res.headersSent) {
      if (err instanceof Error) {
        res.status(400).json({ error: { message: err.message } });
      } else {
        res.status(500).json({ error: { message: 'An error occured' } });
      }
    }
  }
};

const updateBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body as Pick<
      IBlog,
      'title' | 'snippet' | 'body' | 'format'
    >;

    const blog = await Blog.findById(id);
    if (!blog) throw 'Unable to update blog';

    if (req.user?.id !== blog.userId) throw new Error('User not authorized');

    blog.title = body.title;
    blog.snippet = body.snippet;
    blog.body = body.body;
    blog.format = body.format;

    const updatedBlog = await blog.save();
    if (!updatedBlog) throw new Error('Unable to update blog');

    res.status(200).json({});
  } catch (err) {
    if (!res.headersSent) {
      if (err instanceof Error) {
        res.status(400).json({ error: { message: err.message } });
      } else {
        res.status(500).json({ error: { message: 'An error occured' } });
      }
    }
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const blog = await Blog.findById(id).select('userId');

    if (!blog) throw 'Unable to delete blog';
    if (req.user?.id !== blog.userId) throw new Error('User not authorized');

    const deletedBlog = await Blog.findByIdAndRemove(id);
    if (!deletedBlog) throw new Error('Unable to delete blog');

    res.status(200).json({});
  } catch (err) {
    if (!res.headersSent) {
      if (err instanceof Error) {
        res.status(400).json({ error: { message: err.message } });
      } else {
        res.status(500).json({ error: { message: 'An error occured' } });
      }
    }
  }
};

export {
  getBlogs,
  getBlogsByUserId,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
