import React from 'react';
import { Outlet } from 'react-router-dom';

function Dashboard({ user }) {
    return (
        <div>
            <h1>Hello Welcome {user}</h1>
            <Outlet />
        </div>
    );
}

export default Dashboard;
