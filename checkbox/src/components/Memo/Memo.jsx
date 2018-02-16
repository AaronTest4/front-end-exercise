import React from 'react';

import './Memo.css'

export default class Memo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked: false
        }
        this.changeStatus = this.changeStatus.bind(this);
    }

    componentDidMount() {
        this.setState({isChecked: this.props.data.done});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isChecked: nextProps.data.done});
    }

    changeStatus(e) {
        this.setState({isChecked: !this.state.isChecked});
        if (e.shiftKey) {
            this.props.handleShiftClick(this.props.item, this.props.index);
        }
        else {
            this.props.handleClick(this.props.item, this.props.index);
        }
    }
    
    render() {
        let textDecoration = this.props.data.done? 'line-through': 'none';
        let color = this.props.data.done? 'grey':'black';
        return (
            <div style = {{textDecoration: textDecoration}} className = 'memoItem'>
                <input type = "checkbox" checked = {this.state.isChecked} onClick = {this.changeStatus} className = 'memoStatus'/>
                <span style = {{color: color}} className = 'memoContent'> {this.props.data.content} </span>
                <hr/>
            </div>
        )
    }
}