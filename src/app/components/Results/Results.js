import React, { Component } from "react";
import { Card, CardActions, CardMedia, CardTitle } from "material-ui/Card";

import FlatButton from "material-ui/FlatButton";

export default class Results extends Component {
  render() {
    return (
      <div>
        {/* TODO Encapsular em Lista de Provas com Componentes de Cards */}
        <Card>
          <CardMedia>
            <img src="http://chnm.gmu.edu/staff/jsafley/omeka/application/views/scripts/images/fallback-file.png" />
          </CardMedia>
          <CardTitle title="Calculo I" subtitle="2016.1" />
          <CardActions>
            <FlatButton label="Baixar" primary={true} />
          </CardActions>
        </Card>
        <br />
        <Card>
          <CardMedia>
            <img src="http://chnm.gmu.edu/staff/jsafley/omeka/application/views/scripts/images/fallback-file.png" />
          </CardMedia>
          <CardTitle title="Calculo III" subtitle="2016.1" />
          <CardActions>
            <FlatButton label="Baixar" primary={true} />
          </CardActions>
        </Card>
      </div>
    );
  }
}
