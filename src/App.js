import React from 'react';
import {BrowserRouter , Route , Switch} from "react-router-dom";
import Comment from './Components/Comment';
import Home from './Components/Home';

function App() {
    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/comment" component={Comment} />
            </Switch>
        </div>
        </BrowserRouter>
    );
}

export default App;