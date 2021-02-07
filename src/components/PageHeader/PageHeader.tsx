import React from 'react';

export const PageHeader: React.FunctionComponent = () => {
    return (
        <div className="page-header">
            <h1>CODER ONE</h1>
            <h2>PROGRAMMING TASK</h2>
            <small><span>BUILD BY </span>
                <a href="https://github.com/bensyw">Shengyu Wang</a>
            </small>
        </div>
    );
};