import React from 'react';

interface PageFooterProps {
    current: number;
    length: number;
}

export const PageFooter: React.FunctionComponent<PageFooterProps> = ({ current, length }) => {
    return (
        <div className="pagination">{`${current + 1} / ${length}`}</div>
    )
}
