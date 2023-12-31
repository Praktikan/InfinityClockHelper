import React from "react";
import { Clock } from "./Clock";

const App: React.FC = () => (
    <>
        <header style={{ display: 'sticky '}}>header</header>
        <Clock />
        <footer>Footer</footer>
    </>
)

export default App