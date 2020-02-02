import { IAward } from "./IAward";
import { Player } from "../Player";
import { Game } from "../Game";

export class DesertSettler implements IAward {
    public name: string = "DesertSettler";
    public description: string = "Most tiles south of the equator (the four bottom rows)"
    public getScore(player: Player, game: Game): number {
        return game.board.spaces
          .filter((space) => (space.player !== undefined && space.player === player) 
                               && (space.y > 4 || space.y < 9)).length;
    }   
}