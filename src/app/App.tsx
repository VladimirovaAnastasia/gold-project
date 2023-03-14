import React, { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { classNames } from 'shared/lib/classNames/classNames';

const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
            <NavBar />
            <div className="content-page">
                <SideBar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
