import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#000000',
    height: 'auto',
    position: 'static',
  },

  logo: {
    width: '11.358%',
  },

  titleNameCont: {
    width: '25.53%',
  },

  titleName: {
    color: '#c5d3db',
    fontFamily: 'Jacques Francois Shadow',
    fontSize: 35,
    fontWeight: 600,
    fontStyle: 'italic',
    textAlign: 'left',
  },

  navbarList: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '58.963%',
    flexWrap: 'wrap',
  },

  cart: {
    width: '4.096%',
  },

  navbarItem: {
    flexGrow: 1,
    '&:hover': {
      '& a': {
        color: 'red',
        // marginLeft: 10,
      },
    },
  },
});

export default useStyles;
