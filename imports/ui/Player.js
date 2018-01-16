import React from "react";
import {Players} from "../api/players";
import PropTypes from "prop-types"

export default class Player extends React.Component{
    render(){
        return (<p key = {this.props.player._id}>The player {this.props.player.name} have {this.props.player.score};
            <button onClick={() => {
                Players.update({_id : this.props.player._id}, {$inc: {score: 1}});
            }}>+1</button>
            <button onClick={() => {
                Players.update({_id : this.props.player._id}, {$inc: {score: -1}});
            }}>-1</button>
            <button onClick={() => {alert("Remove");
                Players.remove({_id: this.props.player._id})}}>X</button></p>)
    }

}

Players.PropTypes = {
    player: PropTypes.object.isRequired
};