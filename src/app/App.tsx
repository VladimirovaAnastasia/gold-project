import React from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import classNames from "../shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <AppRouter/>
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;
