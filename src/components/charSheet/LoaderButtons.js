/**
 * Created by janda on 26.4.2019.
 */
import React from 'react';
import {Redirect} from 'react-router-dom'

import CharacterDataService from '../../service/CharacterDataService';
import {CharacterConsumer, CharacterContext} from '../../providers/CharacterProvider';

export default class LoaderButtons extends React.Component {
    static contextType = CharacterContext;
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            redirect: false
        };
        this.getAllCharacters();
    }

    getAllCharacters() {
        CharacterDataService.getCharacterNames()
            .then(
                response => {
                    console.log(response);
                    this.setState({
                        names: response.data
                    });

                }

            )
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/edit" />
        }
    }

    render() {
        return (
            <div className="container m-3 text-center">
                {this.renderRedirect()}
                <CharacterButtons names={this.state.names} getCharacter={this.context.getCharacter} setRedirect={this.setRedirect} />
            </div>
        )
    }
}

const CharacterButtons = (props) => (
    <div className="row" >
        {Object.values(props.names).map( name => (
            <div className="m-1" key={name}>
                 <button className="btn btn-info"
                         onClick={() =>
                             props.getCharacter(Object.keys(props.names).find(key => props.names[key] === name))} key={name}>
                    {name}
                 </button>
            </div>
        ))}
        <button onClick={props.setRedirect} className="btn btn-info m-1">Upravit postavu</button>
    </div>
)