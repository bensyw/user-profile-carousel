import React from 'react';

/**
 * Renders heading text
 */
export const PageHeader: React.FunctionComponent = () => {
    return (
        <div className="page-header">
            <h1>User Profile Carousel</h1>
            <h2>Unit Testing with High Test Coverage</h2>
            <small><span>Build by </span>
                <a href="https://www.linkedin.com/in/shengyu-benjamin-wang/">Shengyu Wang</a>
            </small>
        </div>
    );
};
