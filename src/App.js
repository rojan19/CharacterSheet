import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import NewCharacter from "./components/NewCharacter";
import CharacterSheet from "./components/CharacterSheet";
import EditCharacter from "./components/EditSheet";
import MenuImages from "./components/MenuImages";

import CharacterProvider from "./providers/CharacterProvider";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toCharSheet: false,
        };
    }

    render() {
        return (
            <div className="App container-fluid">
                <Router>
                 <CharacterProvider>
                        <div>
                            <Route path="/new" component={NewCharacter} />
                            <Route path="/load" component={CharacterSheet} />
                            <Route path="/edit" component={EditCharacter} />
                            <Route exact path="/" component={MenuImages} />
                        </div>
                   </CharacterProvider>
                </Router>
            </div>
        );
    }
}


export default App;