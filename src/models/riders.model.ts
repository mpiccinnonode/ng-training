import { Beast } from "./beast.model";
import { Human } from "./human.model";

export interface Rider {
    human: Human;
    beast: Beast;
}