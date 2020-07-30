import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

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
  button: {},
});

class EntryPortal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    let { history } = this.props;
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
                  ¡Escribamos Palíndromos!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>
                  En este desafío contarás con 30 segundos para escribir un
                  palíndromo, una vez transcurrido este periodo de tiempo el
                  sistema evaluará la validés del mismo y te mostrará el reverso
                  del palíndromo ingresado.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  fullWidth={true}
                  onClick={() => history.push("/challenge")}
                >
                  Iniciar Desafío
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(classStyles)(withRouter(EntryPortal));
