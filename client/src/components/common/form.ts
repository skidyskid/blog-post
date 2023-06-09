import { styled } from '../../stitches.config';

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  variants: {
    size: {
      fullscreen: {
        width: '80%',
        maxWidth: '$formWidth',

        '@mobile': {
          width: '40%',
        },
      },
    },
  },
});

const Title = styled('h2', {
  variants: {
    size: {
      md: {
        fontSize: '$m-3',
        marginBottom: '0.75rem',

        '@desktop': {
          marginBottom: '1rem',
          fontSize: '$3',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

const Label = styled('label', {
  variants: {
    size: {
      md: {
        fontSize: '$m-5',

        '@desktop': {
          fontSize: '$5',
        },
      },
    },
    fw6: {
      true: {
        fontWeight: 600,
      },
    },
    mb0_5: {
      true: {
        marginBottom: '0.5rem',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

const Input = styled('input', {
  border: 'solid 0.09rem $lightGray',
  borderRadius: '0.5rem',
  fontFamily: 'inherit',
  fontWeight: '500',
  outline: 'none',

  '&:focus': {
    borderColor: 'Black',
  },

  variants: {
    size: {
      md: {
        height: '2.75rem',
        fontSize: '$m-5',
        padding: '0 0.65rem',

        '@desktop': {
          padding: '0 0.7rem',
          height: '3rem',
          fontSize: '$5',
        },
      },
    },
    mb0_25: {
      true: {
        marginBottom: '0.25rem',
      },
    },
    mb1: {
      true: {
        marginBottom: '0.75rem',
        '@desktop': {
          marginBottom: '1rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

const TextArea = styled('textarea', {
  border: 'solid 0.09rem $lightGray',
  borderRadius: '0.5rem',
  fontFamily: 'inherit',
  fontWeight: '500',
  outline: 'none',
  resize: 'none',

  '&:focus': {
    borderColor: 'Black',
  },

  variants: {
    size: {
      md: {
        height: '15rem',
        padding: '0.65rem',
        marginBottom: '1rem',
        fontSize: '$m-5',

        '@desktop': {
          height: '15rem',
          padding: '0.75rem',
          fontSize: '$5',
        },
      },
    },
    mb1: {
      true: {
        marginBottom: '1rem',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

const Button = styled('button', {
  border: 'none',
  borderRadius: '0.5rem',
  fontFamily: 'inherit',
  fontWeight: '600',

  variants: {
    size: {
      btn_sm: {
        height: '$fontSizes$3',
        padding: '0 0.45rem',
        fontSize: '$6',
      },

      btn_md: {
        height: '2.65rem',
        padding: '0 0.65rem',
        fontSize: '$6',
      },

      //form btn
      md: {
        height: '2.75rem',
        fontSize: '$m-5',
        padding: '0 0.7rem',

        '@desktop': {
          height: '3rem',
          fontSize: '$5',
        },
      },
    },

    color: {
      black: {
        backgroundColor: 'Black',
        color: 'White',

        '&:active': {
          backgroundColor: 'Gray',
        },
      },

      danger: {
        backgroundColor: '$danger',
        color: 'White',

        '&:active': {
          backgroundColor: '$dangerDark',
        },
      },

      outline: {
        border: '0.15rem solid Black',
        background: 'none',
        color: 'Black',

        '&:hover': {
          color: '$lightBlack',
          borderColor: '$lightBlack',
        },
      },

      none: {
        background: 'none',
        color: 'Black',

        '&:hover': {
          color: '$lightBlack',
        },
      },
    },

    heightAuto: {
      true: {
        height: 'auto',
      },
    },

    mr1: {
      true: {
        marginRight: '1rem',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'black',
  },
});

const Info = styled('p', {
  variants: {
    size: {
      md: {
        marginTop: '0.5rem',
        fontSize: '$m-5',

        '@desktop': {
          marginTop: '0.75rem',
          fontSize: '$5',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

const Select = styled('select', {
  border: 'none',
  padding: '0.35em',
  fontSize: '$m-5',
  borderRadius: '0.25em',
  fontFamily: 'inherit',

  '@desktop': {
    fontSize: '$5',
  },
});

const Option = styled('option');

export { Form, Title, Label, Input, TextArea, Button, Info, Select, Option };
