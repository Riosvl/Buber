import cors from "cors"
import helmet from "helmet";
import logger from "morgan"
import {GraphQLServer} from "graphql-yoga"
import schema from "./schema";

class App {
  public app;

  constructor() {
    this.app = new GraphQLServer({
      schema
    })
    this.middleware()
  }

  private middleware = () => {
    this.app.express.use(cors())
    this.app.express.use(helmet())
    this.app.express.use(logger('dev'))
  }
}

export default new App().app