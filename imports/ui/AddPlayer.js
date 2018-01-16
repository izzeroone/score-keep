import React from "react";
import {Players} from "../api/players";
import PropTypes from "prop-types"

export default class AddPlayer extends React.Component{
    render(){
        return (<form onSubmit={this.addPlayer.bind(this)}>
            <input type="name" name = "playerName" placeholder="Enter something fool!"/>
            <button>Add player</button>
        </form>);
    }
    addPlayer (e){
        let playerName = e.target.playerName.value;
        e.preventDefault();
        if(playerName){
            e.target.playerName.value = "";
            Players.insert({
                name: playerName,
                score: this.props.score
            })
        }
    }
}

AddPlayer.propTypes = {
    score: PropTypes.number
};

AddPlayer.defaultProps = {
    score: 0
};
