import React from 'react';
import './PageFooter.css'

interface PageFooterProps {
    current: number;
    length: number;
}

/**
 * Renders the current profile number and the total number of profiles
 */
export const PageFooter: React.FunctionComponent<PageFooterProps> = ({ current, length }) => {
    return (
        <div className="page-footer">{`${current + 1} / ${length}`}</div>
    )
}
