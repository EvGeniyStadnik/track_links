import {makeStyles} from "@material-ui/core";

export default makeStyles({
  containerWrapper: {
    textAlign: 'center'
  },
  cardWrapper: {
    minWidth: 275,
  },
  buttonRegister: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'darkgreen',
    }
  },
  wrapper: {
    marginBottom: 12,
    textAlign: "center"
  },
  title: {
    margin: '0 auto 20px'
  },
  buttonsWrapper: {
    justifyContent: 'center'
  },
  inputField: {
    width: '80%'
  }
});