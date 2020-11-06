import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class Season extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null , errorMessage: ''};
    // }

    state = {lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent (){
        if(this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage} </div>
        }

        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner />
    }

    render() {   
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

export default Season;