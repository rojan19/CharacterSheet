/**
 * Created by janda on 10.4.2019.
 */
import React from 'react';
import {CharacterConsumer} from '../../providers/CharacterProvider';

export default class Abilities extends React.Component {
    render() {
        return (
            <CharacterConsumer>
                {({abilities}) => (
                    <div className="container text-center m-1">
                        <div className="row flex-nowrap">
                            <div className="col-2">Sil {abilities["bra"]}</div>
                            <div className="col-2">Obr {abilities["agi"]}</div>
                            <div className="col-2">Int {abilities["int"]}</div>
                            <div className="col-2">Maz {abilities["cun"]}</div>
                            <div className="col-2">Oso {abilities["pre"]}</div>
                            <div className="col-2">Vul {abilities["will"]}</div>
                        </div>
                    </div>
                )}
            </CharacterConsumer>
        )
    }
}


