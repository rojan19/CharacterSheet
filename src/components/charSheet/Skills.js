/**
 * Created by janda on 10.4.2019.
 */
import React from 'react';
import {CharacterConsumer} from '../../providers/CharacterProvider';
import {Button, Collapse} from "reactstrap";

export default class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skillsCollapsed: false,
            combatSkillsCollapsed: false,
            knowledgeSkillsCollapsed: false
        };
    }

    collapseSkills = () => {
        this.setState(state => ({skillsCollapsed: !state.skillsCollapsed}));
    }

    collapseCombatSkills = () => {
        this.setState(state => ({combatSkillsCollapsed: !state.combatSkillsCollapsed}));
    }

    collapseKnowledgeSkills = () => {
        this.setState(state => ({knowledgeSkillsCollapsed: !state.knowledgeSkillsCollapsed}));
    }

    render() {
        return (
            <CharacterConsumer>
                {({skills, abilities}) => (
                    <div>
                        <Button onClick={() => this.collapseSkills()} color="info" size="sm" aria-expanded="false" aria-controls="skills">
                            Schopnosti
                        </Button>
                        <Collapse isOpen={this.state.skillsCollapsed}>

                        <div className="container text-center m-1 collapse.show" id="skills">

                            <div className="row border-bottom pb-1">
                                <div className="col-4 text-left">Schopnost</div>
                                <div className="col-1"><img src="../img/dice/yellow.png" width="20px" alt="yellow dice"/></div>
                                <div className="col-5"><img src="../img/dice/green.png" width="20px" alt="green dice"/>
                                    <img src="../img/dice/yellow.png" width="20px" className="ml-2" alt="yellow dice"/></div>
                                <div className="col-1"><img src="../img/dice/red.png" width="20px" className="" alt="red dice"/></div>
                            </div>
                            <SkillsList skills = {skills} abilities = {abilities} />
                        </div>
                        </Collapse>

                    </div>
                )}
            </CharacterConsumer>
        )
    }
}

function SkillsList(props) {
    const abilities = props.abilities;
    const skillsObject = props.skills;
    const skillsArray = Object.keys(props.skills);
    skillsArray.sort();

    const entriesList = skillsArray.map( skill =>
        <div className="row " key={skill}>
            <div className="col-4 text-left border-bottom">{skill}</div>
            <div className="col-1 border-bottom">{skillsObject[skill]}</div>
            <div className="col-5 border-bottom">
                <img src="../img/dice/green.png" width="30px" alt="green dice"/>
                {getGreen(getAbility(skill, abilities), skillsObject[skill])}
                <img src="../img/dice/yellow.png" width="30px" className="ml-1 mr-1"alt="yellow dice"/>
                {getYellow(getAbility(skill, abilities), skillsObject[skill])}
            </div>
            <div className="col-1 border-bottom">{ (getAbility(skill, abilities) > skillsObject[skill]) ?
                (getAbility(skill, abilities) - skillsObject[skill]) : 0} </div>
        </div>
    );
    return entriesList;
}

function getAbility(skill, abilities){
    let braAbiList = ["athletics", "brawl", "lightsaber", "melee", "resilience"];
    let agiAbiList = ["coordination", "gunnery", "piloting - planetary",
        "piloting - space", "ranged - heavy", "ranged - light", "stealth"];
    let intAbiList = ["astrogation", "knowledge - inner worlds", "knowledge - education", "knowledge - lore",
        "knowledge - outer rim", "knowledge - underworld", "knowledge - xenology", "mechanics",
        "medicine"];
    let cunAbiList = ["deception", "perception", "skulduggery", "streetwise", "survival"];
    let willAbiList = ["coercion", "discipline", "vigilance"];
    let preAbiList = ["charm", "cool", "leadership", "negotiation"];
    // switch nefungoval, prepsat casem
    if (braAbiList.includes(skill)) return abilities["bra"];
    if (agiAbiList.includes(skill)) return abilities["agi"];
    if (intAbiList.includes(skill)) return abilities["int"];
    if (cunAbiList.includes(skill)) return abilities["cun"];
    if (willAbiList.includes(skill)) return abilities["will"];
    if (preAbiList.includes(skill)) return abilities["pre"];
}


function getGreen(ability, skill) {
    return Math.abs(ability - skill);
}

function getYellow(ability, skill) {
    let yellow = 0;
    if (ability > skill) {
        yellow = skill;
    } else {
        yellow = ability;
    }
    return yellow;
}

