import React, {Component} from 'react';

export default class FilterObject extends Component {

    constructor(){
        super();

        this.state = {
            nflTeam: [
                {
                    name: 'DenverBroncos',
                    record: 'Awful',
                    color: 'Blue and Orange',
                },
                {
                    name: 'ClevlandBrowns',
                    record: 'Lol',
                    status: 'Most salty players ever',
                },
                {
                    name: 'Raiders',
                    convictstatus: true,
                    fans: 'Also convicts',
                },
                {
                    name: 'Patriots',
                    convictstatus: false,
                    fans: 'I wish they were convicts',
                }
            ],

            userInput: '',
            filterednflTeam: []

        }
    }

    handleChange(value) {
        this.setState({ userInput: value});
    }

    filternflTeam(prop) {
        let nflTeam = this.state.nflTeam;
        let filterednflTeam = [];

        for(let i = 0; i < nflTeam.length; i++) {
            if(nflTeam[i].hasOwnProperty(prop)){
                filterednflTeam.push(nflTeam[i]);
            }
        }

        this.setState({filterednflTeam: filterednflTeam});
    }


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.nflTeam, null, 10)} </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filternflTeam(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filterednflTeam, null, 10)}</span>
            </div>
        )
    }
}