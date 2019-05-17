/**
 * Created by janda on 3.5.2019.
 */
import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import CharacterDataService from "../service/CharacterDataService";

// context is exposed to enable using contextType
const CharacterContext = React.createContext()

//setting an const for exporting the consumer element
const CharacterConsumer = CharacterContext.Consumer

class CharacterProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "test, test",
            name: "no-name",
            id: "999",
            currStamina: 0,
            maxStamina: 0,

            abilities: {
                "bra": 0,
                "agi": 0,
                "int": 0,
                "cun": 0,
                "will": 0,
                "pre": 0
            },

            skills: [],
            characters: [],
            getCharacter: this.getCharacter,
            lowerStamina: this.lowerStamina,
            raiseStamina: this.raiseStamina,
        }
    }

    getCharacter = (id) => {
        console.log("Getting character...")
        CharacterDataService.getCharacterById(id)
            .then(
                response => {
                    console.log(response);
                    this.setState({
                        name: response.data.username,
                        maxStamina: response.data.stamina,
                        currStamina: response.data.stamina,
                        id: response.data.id,
                        abilities: response.data.abilities,
                        skills: response.data.skills
                    });
                }
            );
        this.props.history.push('/load');
    }

    raiseStamina = () => {
        if (this.state.currStamina < this.state.maxStamina) {
            this.setState((state, props) => ({
                currStamina: state.currStamina + 1
            }))
        }
    }

    lowerStamina = () => {
        if (this.state.currStamina > 0) {
            this.setState((state, props) => ({
                currStamina: state.currStamina - 1
            }))
        }
    }





    render() {
        return (
            <CharacterContext.Provider
                value={this.state}>
               {
                   this.props.children
               }
            </CharacterContext.Provider>
        )
    }
}

export { CharacterContext, CharacterConsumer}
export default withRouter(CharacterProvider)
//export default CharacterProvider
