/**
 * Created by janda on 23.4.2019.
 */
import React from 'react';
import {CharacterConsumer, CharacterContext} from '../../providers/CharacterProvider'

export default class Stamina extends React.Component {
    static contextType = CharacterContext;

    render() {
        return (
            <div>
                <button onClick={this.context.raiseStamina} className="btn btn-info btn-block  btn-lg"> +1 </button>
                <CharacterConsumer>
                    {({currStamina, maxStamina}) => <span className="text-center">Stamina: {currStamina} z {maxStamina}</span>}
                </CharacterConsumer>
                <button onClick={this.context.lowerStamina} className="btn btn-info btn-block btn-lg"> -1 </button>
            </div>
        )
    }
}

/*


 */