import React, { Component } from 'react';

class Key extends Component {

    click(value){
        this.props.onKeyPressed(this.props.keyValue)
    }

    render() {
        return (
            <td colSpan={this.props.spacing}>
                <input 
                    type="button" 
                    onClick={()=>{
                        this.click(this.props.keyValue)
                    }}
                    value={this.props.keyValue}
                /> 
            </td>
        );
    }
}

export default Key;