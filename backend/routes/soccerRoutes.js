import { get } from "mongoose";
import { addNewPlayer, deletePlayer, getPlayers, getPlayerWithID, updatePlayer } from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players")
    //GET endpoint
        .get(getPlayers)
    //POST endpoint
        .post(addNewPlayer);

app.route('/players/:PlayerId')
        .get(getPlayerWithID)
        .put(updatePlayer)
        .delete(deletePlayer)
}; 

export default routes;
