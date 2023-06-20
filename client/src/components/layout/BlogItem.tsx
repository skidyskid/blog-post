import { styled } from '../../stitches.config';
import { Link } from 'react-router-dom';
import { IBlogData } from '../../types/IBlog';

const Div = styled('div', {
  marginBottom: '2rem',

  '@desktop': {
    marginBottom: '3rem',
  },
});

const A = styled('a', {
  textDecoration: 'none',
  color: 'Black',
});

const TitleItem = styled('h2', {
  position: 'relative',
  display: 'inline-block',
  fontSize: '$m-3',
  marginBottom: '0.125rem',

  '@desktop': {
    fontSize: '$3',
  },

  '&::after': {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: 0,

    width: 0,
    height: '0.2rem',
    backgroundColor: 'Black',
    transition: 'width 0.25s ease',
  },

  '&:hover::after': {
    width: '100%',
  },
});

const Info = styled('p', {
  marginBottom: '1rem',
  color: 'DimGray',
  fontSize: '$m-6',
  fontWeight: 500,

  '@desktop': {
    marginBottom: '1.25rem',
    fontSize: '$6',
  },
});

const SnippetItem = styled('p', {
  textAlign: 'justify',
  fontSize: '$m-4',

  '@desktop': {
    fontSize: '$4',
  },
});

interface Props
  extends Pick<IBlogData, '_id' | 'title' | 'snippet' | 'createdAt'> {
  username: string;
}

const BlogItem = ({ _id, username, title, snippet, createdAt }: Props) => {
  return (
    <Div>
      <A as={Link} to={`${import.meta.env.VITE_BASE_URL_CLIENT}/blogs/${_id}`}>
        <TitleItem>{title}</TitleItem>
      </A>
      <Info>
        {new Intl.DateTimeFormat('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }).format(new Date(createdAt as string))}{' '}
        &#8226; {username}
      </Info>

      <SnippetItem>{snippet}</SnippetItem>
    </Div>
  );
};

export default BlogItem;
