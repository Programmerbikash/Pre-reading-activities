import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions'>
            <div className="first">
                <h1>How Does React Work?</h1>
                <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript. Users can create a representation of a DOM node by declaring the Element function in React. You may have noticed that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className. JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript. In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.</p>
            </div>
            <div className="second">
                <h1>What are the differences between props and state ?</h1>
                <p><strong>Props: </strong>Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.<br />The Data is passed from one component to another.<br /> Props can be used with state and functional components.</p>
                <p><strong>State: </strong>The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.<br /> The Data is passed within the component only.<br /> State can be used only with the state components/class component (Before 16.0).</p>
            </div>
            <div className="third">
                <h1></h1>
                <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.<br /> <strong>Dependencies argument: </strong>dependencies argument of useEffect(callback, dependencies) lets you control when the side-effect runs. <br /> <strong>Component did mount: </strong>useEffect(..., []) was supplied with an empty array as the dependencies argument. When configured in such a way, the useEffect() executes the callback just once, after initial mounting.<br /> <strong>Component did update: </strong>The useEffect(callback, [prop, state]) invokes the callback after the changes are being committed to DOM and if and only if any value in the dependencies array [prop, state] has changed. Using the dependencies argument of useEffect() you control when to invoke the side-effect, independently from the rendering cycles of the component. Again, that's the essence of useEffect() hook.<br /> <strong>Side-effect cleanup: </strong>After initial rendering, useEffect() invokes the callback having the side-effect. cleanup function is not invoked.  On later renderings, before invoking the next side-effect callback, useEffect() invokes the cleanup function from the previous side-effect execution (to clean up everything after the previous side-effect), then runs the current side-effect.</p>
            </div>
        </div>
    );
};

export default Questions;