/**
 * Created by janda on 3.5.2019.
 */
import React from "react";

import {CharacterContext} from "../providers/CharacterProvider";

export default class MenuImages extends React.Component {
    static contextType = CharacterContext;

    render() {
        return (
            <div className="m-3">
                <img src="/img/chars/1.png" onClick={ () => this.context.getCharacter(1)} width="200px"
                     className="m-1" alt="character"/>
                <img src="/img/chars/2.png" onClick={ () => this.context.getCharacter(2)} width="200px"
                     className="m-1" alt="character"/>
            </div>

        )
    }
}