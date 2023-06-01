import stitches from '../../stitches.config';
import NotFound from '../NotFound';
import { IUser } from '../../types/user';
import { IUserIcon } from '../../types/userIcon';
import { A as NavLink } from '../../components/stitches/elements';
import ProfileAbout from '../../components/layout/ProfileAbout';
import ProfileBlogs from '../../components/layout/ProfileBlogs';

import { useEffect, useState } from 'react';
import { useParams, Link, Route, Routes, useMatch } from 'react-router-dom';

const { styled } = stitches;

// banner
const Banner = styled('div', {
  width: '100%',
  padding: '1.5rem max(calc((100% - $sizes$contentWidth) / 2), 2rem)',
  backgroundColor: 'Black',
  color: 'White',

  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  rowGap: '1rem',

  '@tablet': {
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
  },
});

const Icon = styled('img', {
  marginRight: '1rem',
  width: '5rem',
  aspectRatio: '1/1',
  borderRadius: '50%',
  objectFit: 'cover',
  userSelect: 'none',

  '@tablet': {
    marginRight: '1.5rem',
    width: '7.5rem',
  },

  '@desktop': {
    marginRight: '2rem',
    width: '12.5rem',
  },

  variants: {
    blank: {
      true: {
        backgroundColor: 'Gray',
      },
    },
  },
});

const BannerInfoContainer = styled('div');

const BannerTitle = styled('h1', {
  fontSize: '$s',
  fontWeight: '700',

  '@tablet': {
    fontSize: '$m',
  },

  '@desktop': {
    fontSize: '$l',
  },
});

const BannerDesc = styled('p', {
  fontSize: '$xs',

  '@tablet': {
    fontSize: '$s',
  },
});

// main
const Main = styled('main', {
  margin: '0 auto',
  paddingBottom: '3rem',
  width: '80%',
  maxWidth: '$contentWidthS',
});

const Nav = styled('div', {
  margin: '1.5rem auto',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',

  '@desktop': {
    margin: '2.5rem auto',
  },
});

const LinkCSS = {
  height: 'auto',
  padding: '0.35rem',
  fontSize: '$xxs',

  '@tablet': {
    fontSize: '$xs',
  },

  '@desktop': {
    fontSize: '$s',
  },
};

const Profile = () => {
  const { username } = useParams();
  const matchIndex = useMatch(`/${username}`);
  const matchAbout = useMatch(`/${username}/about`);
  const matchBlogs = useMatch(`/${username}/blogs`);

  const [userData, setUserData] = useState<IUser | null>(null);
  const [base64Icon, setBase64Icon] = useState<string>('');

  const [userNotFound, setUserNotFound] = useState<boolean>(false);

  useEffect(() => {
    const updateUser = async () => {
      console.log(username);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL_SERVER}/user/${username}`
        );

        const responseData: IUser = await response.json();
        if (response.ok) {
          setUserData(responseData);
        } else {
          setUserNotFound(true);
        }
      } catch (err) {
        console.error(err);
      }
    };

    updateUser();
  }, [username]);

  useEffect(() => {
    const getUserIcon = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL_SERVER}/user/${username}/icon`
        );

        const userIcon: IUserIcon = await response.json();
        if (userIcon)
          setBase64Icon(
            `data:${userIcon.mime};base64,` +
              btoa(String.fromCharCode(...new Uint8Array(userIcon.image.data)))
          );
      } catch (err) {
        console.error(err);
      }
    };

    getUserIcon();
  }, [username]);

  if (userNotFound) {
    return <NotFound />;
  }

  return (
    <>
      <Banner>
        {base64Icon ? (
          <Icon src={base64Icon} alt="profile-icon" />
        ) : (
          <Icon blank />
        )}

        <BannerInfoContainer>
          {userData?.firstName || userData?.lastName ? (
            <>
              <BannerTitle>
                {userData?.firstName} {userData?.lastName}
              </BannerTitle>
              <BannerDesc>@{userData?.username}</BannerDesc>
            </>
          ) : (
            <>
              <BannerTitle>{userData?.username}</BannerTitle>
            </>
          )}
        </BannerInfoContainer>
      </Banner>

      <Main>
        <Nav>
          <NavLink
            className={matchAbout || matchIndex ? 'active' : ''}
            css={LinkCSS}
            color="none"
            as={Link}
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={matchBlogs ? 'active' : ''}
            color="none"
            as={Link}
            to="blogs"
            css={LinkCSS}
          >
            Blogs
          </NavLink>
        </Nav>

        {userData && (
          <Routes>
            {['', '/about'].map((path) => (
              <Route
                path={path}
                key={crypto.randomUUID()}
                element={
                  <ProfileAbout
                    contact={userData.contact}
                    location={userData.location}
                    email={userData.email}
                  />
                }
              />
            ))}

            <Route
              path="/blogs"
              element={<ProfileBlogs userId={userData._id} />}
            />
          </Routes>
        )}
      </Main>
    </>
  );
};

export default Profile;