import React from 'react';

import './Page.css';

import Memo from '../Memo/Memo';

export default class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            buttonPrompt: "Check All",
            //false means not all items are checked, true means yes
            flag: false,
            lastShiftClick: false,
            firstShiftClickIndex: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeAll = this.handleChangeAll.bind(this);
        this.handleShiftChange = this.handleShiftChange.bind(this);
    }

    componentDidMount() {
        const cache = JSON.parse(localStorage.getItem("data"));
        if (cache) {
            console.log(cache);
            this.setState({data: cache});
        }
        else{
            fetch('data.json').then((response)=> {
                return response.json();
            }).then((response)=> {
                console.log(response);
                this.setState({data: response.data});
            })
        }
    }

    componentDidUpdate() {
        if(this.state.flag === false){
            if (this.state.data.every(function(item){
                return item.done === true;
            })) {
                this.setState({flag: true});
                this.setState({buttonPrompt: "Uncheck All"})
            }
        }
        else{
            if (this.state.data.every(function(item){
                item.done === false;
            })) {
                this.setState({flag: false});
                this.setState({buttonPrompt: "Check All"})
            }
        }
        localStorage.setItem("data", JSON.stringify(this.state.data));
    }

    handleChange (item, index){
        this.setState({lastShiftClick: false});
        let newData = JSON.parse(JSON.stringify(this.state.data)); 
        newData[index].done = !this.state.data[index].done;
        this.setState({data: newData});
    }

    handleShiftChange (item, index){
        let newData = JSON.parse(JSON.stringify(this.state.data)); 
        if(!this.state.lastShiftClick){
            this.setState({firstShiftClickIndex: index});
            this.setState({lastShiftClick: true});
            newData[index].done = !this.state.data[index].done;            
        }
        else{
            for (let i = index; i<= this.state.firstShiftClickIndex; i++) {
                if (!newData[i].done) {
                    newData[i].done = true;
            }
                else break;
            }
            for (let i = index; i >= this.state.firstShiftClickIndex; i--) {
                if(!newData[i].done){
                    newData[i].done = true;
            }
                else break;
            }
        }
        this.setState({data: newData});
    }

    //TODO: Change from shallow copy to deep copy NOT MANIPULATE STATE
    handleChangeAll(){ 
        if(this.state.buttonPrompt === "Check All"){
            this.setState({buttonPrompt: "Uncheck All"});
        }
        else this.setState({buttonPrompt: "Check All"});

        let newData = JSON.parse(JSON.stringify(this.state.data)); 

        if(this.state.flag === false){
            newData.forEach((item) => {
                item.done = true;
            })
        }
        else {
            newData.forEach((item) => {
                item.done = false;
            })
        }
        this.setState({data: newData});
        this.setState({flag: !this.state.flag});
    }



    render(){
        return(
        <div className = 'wholepage'>
        <button className = 'checkAll' onClick = {this.handleChangeAll}>{this.state.buttonPrompt}</button>
        <div className = 'mainPage'>
            <div className = 'vl'></div>
            <h2 className = 'greet'>Oh, what to do?</h2>
            <hr className = "breakLine"/>
            {this.state.data?             
            <div>
                {this.state.data.map((item, index)=> {
                    return <Memo 
                    lastShiftClick = {this.state.lastShiftClick}
                    data = {item}
                    key = {index}
                    index = {index}
                    flag = {this.state.flag}
                    handleClick = {this.handleChange}
                    handleShiftClick = {this.handleShiftChange}
                    />;
                })}
            </div>
            : <div></div>}

        </div>
        </div>

        );
        
    }
}