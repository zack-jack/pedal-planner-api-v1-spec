import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./swagger.yaml');

const ui = SwaggerUI({
  spec,
  dom_id: '#swagger',
});

ui.initOAuth({
  appName: 'Pedal Tetris API v1',
  // See https://demo.identityserver.io/ for configuration details.
  clientId: 'implicit',
});
