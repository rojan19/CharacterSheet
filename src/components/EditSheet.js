/**
 * Created by janda on 6.5.2019.
 */

import React from "react";
import {CharacterConsumer, CharacterContext} from "../providers/CharacterProvider";

import AbilitiesEdit from "./editSheet/AbilitiesEdit"

export default class CharacterSheet extends React.Component {
    static contextType = CharacterContext;
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <CharacterConsumer>
                    {({id, name}) => (
                        <h1>{name}</h1>
                    )}{/* Place for save and cancel buttons*/}
                </CharacterConsumer>
                <AbilitiesEdit/>
            </div>
        )
    }
}

