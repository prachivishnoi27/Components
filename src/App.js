import React from 'react';
import {BrowserRouter , Route , Switch} from "react-router-dom";
import Comment from './Components/Comments/Comment';
import Home from './Components/Home';
import Season from './Components/Season/season';
import Pics from './Components/Pics/Pic';
import Videoplayer from './Components/VideoPlayer/Videoplayer';

function App() {
    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/pic" component={Pics} />
                <Route path="/season" component={Season} />
                <Route path="/comment" component={Comment} />
                <Route path="/videoplayer" component={Videoplayer} />
            </Switch>
        </div>
        </BrowserRouter>
    );
}

export default App;