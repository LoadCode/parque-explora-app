import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";

class GameReset extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { history } = this.props;
    return (
      <Dialog
        open={this.props.dialogState}
        // onClose={this.props.onClose}
        aria-labelledby="simple-dialog-title"
      >
        <DialogTitle id="simple-dialog-title">
          ¡Te quedaste sin tiempo!
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            spacing={1}
            // align="center"
            // justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography>
                Esta vez no lograste ingresar tu palíndromo en el tiempo límite.
                <br />
                Pero no te preocupes, puedes intentarlo nuevamente.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                color="primary"
                fullWidth={true}
                onClick={() => history.push("/")}
              >
                Volver a Jugar
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withRouter(GameReset);
