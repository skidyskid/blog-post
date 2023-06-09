import { createStitches } from '@stitches/react';

const { styled, globalCss, css } = createStitches({
  theme: {
    colors: {
      lightBlack: '#4C4C4C',
      lightGray: '#CBCBCB',
      darkGray: '#6F7378',
      blue: '#007BFF',
      danger: '#CC0000',
      dangerDark: '#8B0000',

      terminal: '#1E1E1E',
    },
    fonts: {
      default: 'Raleway, sans-serif',
    },
    fontSizes: {
      title: '2.5rem',

      // desktop
      1: '3.75rem',
      2: '3rem',
      3: '2.25rem',
      4: '1.5rem',
      5: '1.125rem',
      6: '1rem',
      7: '0.75rem',

      // mobile
      'm-1': '2.5rem',
      'm-2': '2rem',
      'm-3': '1.5rem',
      'm-4': '1.25rem',
      'm-5': '1rem',
      'm-6': '0.75rem',
    },
    sizes: {
      contentWidth: '1280px',
      contentWidthS: '1000px',
      formWidth: '800px',
    },
    space: {
      mobPadding: '1.5rem',
    },
  },
  media: {
    tablet: '(min-width: 500px)',
    desktop: '(min-width: 1000px)',
  },
});

const useGlobalCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '*::before, *::after': {
    boxSizing: 'border-box',
  },
  'html, body, #root': {
    width: '100%',
    height: '100%',
    minHeight: '100% !important',
    padding: 0,
  },
  body: {
    fontFamily: '$default',
  },
  '#root': {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    cursor: 'pointer',
  },
  '.stop-transition': {
    animation: 'none !important',
    transition: 'none !important',
  },
  img: {
    pointerEvents: 'none',
  },

  // blog
  '.blog-content': {
    fontSize: '0.75rem',
    margin: '0 auto',
    maxWidth: '100%',

    h1: {
      fontSize: '2rem',
    },

    h2: {
      fontSize: '1.5rem',
    },

    'h3, h4, h5, h6': {
      fontSize: '1.25rem',
    },

    p: {
      marginBottom: '1.25em',
    },

    a: {
      color: '$blue',
    },

    ul: {
      marginBottom: '1em',
    },

    li: {
      listStylePosition: 'inside',
    },

    pre: {
      marginBottom: '1.25em',
      backgroundColor: '$terminal',
      color: 'White',
      borderRadius: '0.5em',
      padding: '1em',
      overflowX: 'auto',
    },

    'pre > code': {
      backgroundColor: 'transparent',
      color: 'inherit',
      padding: 0,
    },

    code: {
      backgroundColor: '$terminal',
      color: 'White',
      borderRadius: '0.25em',
      padding: '0.0625em',
    },

    blockquote: {
      borderLeft: '0.25em solid Black',
      paddingLeft: '1rem',
      marginLeft: '0',
      marginRight: '0',

      '& > p': {
        fontStyle: 'italic',
      },
      '& > footer': {
        fontStyle: 'italic',
      },

      '& > footer:before': {
        content: '"— "',
      },
    },

    table: {
      width: '100%',
      marginBottom: '1em',
      color: 'inherit',
      borderCollapse: 'collapse',
    },

    'table th': {
      fontWeight: 'bold',
    },

    'table th, table td': {
      padding: '0.75em',
      verticalAlign: 'top',
      border: '1px solid Black',
    },

    '@tablet': {
      fontSize: '0.875rem',
      lineHeight: '1.25',

      h1: {
        fontSize: '2.5rem',
      },

      h2: {
        fontSize: '2rem',
      },

      'h3, h4, h5, h6': {
        fontSize: '1.5rem',
      },
    },

    '@desktop': {
      fontSize: '1rem',
      lineHeight: '1.5',

      h1: {
        fontSize: '3rem',
      },
      h2: {
        fontSize: '2.5rem',
      },
      'h3, h4, h5, h6': {
        fontSize: '2rem',
      },
    },
  },
});

export { styled, useGlobalCss, css };
