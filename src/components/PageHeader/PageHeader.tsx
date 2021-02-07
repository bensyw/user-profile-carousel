import React from 'react';

/**
 * Renders heading text
 */
export const PageHeader: React.FunctionComponent = () => {
    return (
        <div className="page-header">
            <h1>CODER ONE</h1>
            <h2>PROGRAMMING TASK</h2>
            <small><span>BUILD BY </span>
                <a href="https://www.linkedin.com/in/shengyu-benjamin-wang/">Shengyu Wang</a>
            </small>
        </div>
    );
};
