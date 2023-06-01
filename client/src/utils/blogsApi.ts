import IBlog from '../types/IBlog';
import { IGetUserameByIDResponse } from '../types/IUser';

// get
const getBlogs = async () => {
  try {
    const responseBlog = await fetch(
      `${import.meta.env.VITE_BASE_URL_SERVER}/blogs/`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!responseBlog.ok) throw new Error('Could not fetch blogs');

    const responseDataBlog: IBlog[] = await responseBlog.json();
    return responseDataBlog;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getBlogsByUserId = async (userId: string) => {
  try {
    const responseBlog = await fetch(
      `${import.meta.env.VITE_BASE_URL_SERVER}/blogs/user/${userId}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!responseBlog.ok) throw new Error('Could not fetch blogs');

    const responseDataBlog: IBlog[] = await responseBlog.json();

    return responseDataBlog;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getBlog = async (id: string) => {
  try {
    const responseBlog = await fetch(
      `${import.meta.env.VITE_BASE_URL_SERVER}/blogs/${id}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!responseBlog.ok) throw new Error('Could not fetch blog');

    const responseDataBlog: IBlog = await responseBlog.json();
    return responseDataBlog;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getBlogsUsernames = async (blogs: IBlog[]) => {
  try {
    const names: (string | undefined)[] = await Promise.all(
      blogs?.map(async (blog) => {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL_SERVER}/user/username/${
            blog.userId
          }`,
          {
            headers: {
              Accept: 'application/json',
            },
          }
        );

        if (!response.ok) throw new Error('Could not fetch username');

        const responseData: IGetUserameByIDResponse = await response.json();
        return responseData.username;
      }) ?? []
    );

    const isAllDefined = (arr?: Array<string | undefined>): arr is string[] => {
      return arr?.every((username) => username !== undefined) ?? false;
    };

    if (isAllDefined(names)) {
      return names;
    } else {
      throw new Error('Could not fetch usernames');
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

// post
const createBlog = async (title: string, snippet: string, body: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL_SERVER}/blogs/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token') as string,
        },
        body: JSON.stringify({ title, snippet, body }),
      }
    );

    if (!response.ok) throw new Error('Could not create blog');

    const responseData: string = await response.json();
    return responseData;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { getBlogs, getBlogsByUserId, getBlog, getBlogsUsernames, createBlog };
