/**
 * Created by janda on 17.5.2019.
 */

import React from 'react';
import {CharacterConsumer} from '../../providers/CharacterProvider';

export default class AbilitiesEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            abilities: {
                "bra": 0,
                "agi": 0,
                "int": 0,
                "cun": 0,
                "will": 0,
                "pre": 0
            },
        }
    }

    render() {
        return(
            <CharacterConsumer>

            </CharacterConsumer>
        )
    }
}
