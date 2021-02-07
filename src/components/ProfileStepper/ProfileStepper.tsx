import React from 'react';
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

interface ProfileStepperProps {
    handleNextOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleBackOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    length: number;
    current: number;
};

// Inline styling of Material-UI component
const nextBottonStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    right: "10%",
    color: "white",
    transform: "-50%",
    msTransform: "-50%"
};

const backBottonStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "10%",
    color: "white",
    transform: "-50%",
    msTransform: "-50%",
};

/**
 * Renders back and next button to step backward or forward the profile to be displayed
 */
export const ProfileStepper: React.FunctionComponent<ProfileStepperProps> = ({ handleNextOnClick, handleBackOnClick, current, length }) => {
    return (
        <>
            {/*Render the next button unless it reaches the last profile*/}
            {!(current === length - 1) &&
                <div data-testid="next-btn">
                    <IconButton style={nextBottonStyle} size="medium" onClick={handleNextOnClick}>
                        <ArrowForwardIosIcon fontSize="large" style={{ color: "white" }} />
                    </IconButton>
                </div>
            }
            {/*Render the back button unless it reaches the first profile*/}
            {!(current === 0) &&
                <div data-testid="back-btn">
                    <IconButton style={backBottonStyle} size="medium" onClick={handleBackOnClick}>
                        <ArrowBackIosIcon fontSize="large" style={{ color: "white" }} />
                    </IconButton>
                </div>
            }
        </>
    );
};