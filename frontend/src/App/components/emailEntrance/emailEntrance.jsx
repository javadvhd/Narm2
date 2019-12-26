import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'

const EmailEntrance = ({ onSubmit, handleClose }) => {
  const [state, setState] = React.useState({})
  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            لطفانام کاربری و رمز خود را وارد کنید
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="نام کاربری"
            type="text"
            fullWidth
            onChange={({ target: { value } }) =>
              setState({ ...state, username: value })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="رمز ورود"
            type="text"
            fullWidth
            onChange={({ target: { value } }) =>
              setState({ ...state, password: value })
            }
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
          Cancel
        </Button> */}
          <Button onClick={() => onSubmit(state)} color="primary">
            تایید
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EmailEntrance
