import React from 'react';
import SearchBar from './SearchBar';

class Pic extends React.Component {
    onSearchSubmit(term){
        console.log(term);
    }

    render(){
        return (
            <div className="ui container" style={{marginTop : '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};

export default Pic;