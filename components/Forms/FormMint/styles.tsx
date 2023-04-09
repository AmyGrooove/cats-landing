import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 20px 0 20px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // кнопка по середине
    width: 310,
    height: 68,
    background: '#fff',
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '100px',
    '@media (max-width: 500px)': {
      width: 290,
      height: 62,
    },
  },
  modaleBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 230,
    width: 700,
    textAlign: 'center',
    userSelect: 'none',
    '@media (max-width: 500px)': {
      height: 300,
      width: 320,
    },
  },
  paddingTop: {
    marginLeft: 4,
    marginRight: 4,
    paddingBottom: 30,
    fontSize: 30,
    '@media (max-width: 500px)': {
      fontSize: 24,
    },
  },
  paddingBop: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 22,
    '@media (max-width: 500px)': {
      fontSize: 18,
    },
  },
  centerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  link: {
    textDecoration: 'underline',
    textDecorationColor: '#FA1E54',
    transition: '0.1s',
    '&:hover': {
      color: '#FA1E54',
    },
  },
  onButton: {
    position: 'absolute',
    '&:hover': {
      opacity: 0,
    },
  },
  countWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    fontWeight: 'bold',
  },
  manipulateButton: {
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#D7E0E2',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    '&:hover': {
      background: '#4F5355',
    },
  },
  count: {
    width: 30,
    textAlign: 'center',
    fontFamily: 'Cera Pro',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#151718',
  },
  mintLabel: {
    fontFamily: 'Cera Pro',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontSize: 24,
    '@media (max-width: 500px)': {
      fontSize: 20,
    },
  },
  mintLabelConnect: {
    fontFamily: 'Cera Pro',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontSize: '1rem',
    '@media (max-width: 500px)': {
      fontSize: '.8rem',
    },
  },
  mobileHightAddButton: {
    '@media (max-width: 500px)': {
      height: 17,
    },
  },
  mintPadding: {
    paddingLeft: '14px',
  },
  mintButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    background: '#FA1E53',
    color: '#fff',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: '0.2s',
    '@media (max-width: 500px)': {
      width: 80,
      height: 80,
    },
    '&:hover': {
      background: '#008DBF',
    },
    '&:active': {
      width: 90,
      height: 90,
      transition: '0.05s',
    },
  },
  addButton: {
    paddingLeft: 19,
    paddingTop: 24,
    paddingBottom: 24,
    paddingRight: 20,
    border: 'none',
    backgroundColor: 'rgb(0,0,0,0)',
    cursor: 'pointer',
    '@media (max-width: 500px)': {
      paddingLeft: 20,
      paddingTop: 22,
    },
  },
  comingSoon: {
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 20px 0 20px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    height: 68,
    background: 'transparent',
    filter: 'drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.1))',
    border: '2px solid rgba(161, 161, 189, 0.6)',
    borderRadius: '100px',
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '22px',
    lineHeight: '28px',
    textAlign: 'center',
    color: '#FFFFFF',
    '@media (max-width: 500px)': {
      width: 290,
      height: 62,
    },
  },
}));
