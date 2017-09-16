import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        return(
            <div>
                <input 
                    
                    onChange={event => this.onInputChange(event.target.value)}/>
                
            </div>
        );
    }
    onInputChange(term) {
        this.props.searchcallbackfunction(term);
        this.setState({ term: term });
    }
}



export default SearchBar;