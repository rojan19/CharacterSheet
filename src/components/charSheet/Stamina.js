/**
 * Created by janda on 23.4.2019.
 */
import React from 'react';
import {CharacterConsumer, CharacterContext} from '../../providers/CharacterProvider';
import {Button} from "reactstrap";

export default class Stamina extends React.Component {
    static contextType = CharacterContext;

    render() {
        return (
            <div>
                <Button onClick={this.context.raiseStamina} color="info" block> +1 </Button>
                <CharacterConsumer>
                    {({currStamina, maxStamina}) => <span className="text-center">Stamina: {currStamina} z {maxStamina}</span>}
                </CharacterConsumer>
                <Button onClick={this.context.lowerStamina} color="info" block> -1 </Button>
            </div>
        )
    }
}

/*


 */