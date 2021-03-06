/**
 * Created by janda on 6.5.2019.
 */
import React from "react";
import {CharacterConsumer, CharacterContext} from "../providers/CharacterProvider";

import Abilities from "./charSheet/Abilities";
import Stamina from "./charSheet/Stamina";
import Skills from "./charSheet/Skills";
import LoaderButtons from "./charSheet/LoaderButtons";

export default class CharacterSheet extends React.Component {
    static contextType = CharacterContext;

    render() {
        return (
         <div>
             <LoaderButtons/>
             <CharacterConsumer>
                 {({id, name}) => (
                     <h1>{name}</h1>

                 )}
             </CharacterConsumer>
             <Stamina/>
             <Abilities/>
             <Skills/>
         </div>
        )
    }
}

