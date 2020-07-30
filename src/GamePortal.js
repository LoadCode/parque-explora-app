import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import GameReset from "./GameReset";

const classStyles = (theme) => ({
  panel: {
    maxWidth: "40%",
    display: "block",
    backgroundColor: "blue",
  },
  title: {
    textAlign: "center",
    fontSize: 25,
  },
  clock: {
    textAlign: "center",
    fontSize: 16,
  },
});

class GamePortal extends React.Component {
  constructor(props) {
    super(props);
    this.createClock = this.createClock.bind(this);
    this.handleGameReset = this.handleGameReset.bind(this);
    this.state = {
      timeLeft: 20,
      dialogState: false,
    };
  }

  createClock() {
    this.myInterval = setInterval(() => {
      this.setState(({ timeLeft }) => ({
        timeLeft: timeLeft - 1,
      }));
    }, 1000);
  }

  componentDidMount() {
    this.createClock();
  }

  handleGameReset() {
    console.log("You clicked to reset the game");
  }

  render() {
    const { classes } = this.props;
    let failure = false;
    if (this.state.timeLeft === 0) {
      failure = true;
      clearInterval(this.myInterval);
    }
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={2} alignContent="center">
              <Grid item xs={12}>
                <Typography className={classes.title} gutterBottom>
                  ¡Vamos a Jugar!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom className={classes.clock}>
                  Tiempo Restante {this.state.timeLeft} segundos
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="answerId"
                  label="Escribe un Palíndromo"
                  //   onChange={(e) => {
                  //     this.answer.answerId = e.target.value;
                  //   }}
                  //onKeyDown={handleOnKeyDown}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  fullWidth={true}
                  //   onClick={() => history.push("/challenge")}
                >
                  Validar Respuesta
                </Button>
              </Grid>
            </Grid>
          </CardContent>
          <GameReset dialogState={failure} />
        </Card>
      </div>
    );
  }
}

export default withStyles(classStyles)(withRouter(GamePortal));
