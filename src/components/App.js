import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Example code to delete later

const PageOne = () => {
  return <div>PageOne</div>
};
const PageTwo = () => {
  return (
     <div>
      PageTwo
      <button>Click me!</button>
    </div>
  )
};

//End Example Code

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <div>
        <Route path="/" exact  component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  )
};
//TEST
export default App;

