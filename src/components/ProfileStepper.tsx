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

export const ProfileStepper: React.FunctionComponent<ProfileStepperProps> = ({ handleNextOnClick, handleBackOnClick, current, length }) => {
    return (
        <div>
            {!(current === length - 1) &&
                <IconButton style={nextBottonStyle} size="medium" onClick={handleNextOnClick}>
                    <ArrowForwardIosIcon fontSize="large" style={{ color: "white" }} />
                </IconButton>}

            {!(current === 0) &&
                <IconButton style={backBottonStyle} size="medium" onClick={handleBackOnClick}>
                    <ArrowBackIosIcon fontSize="large" style={{ color: "white" }} />
                </IconButton>}
        </div>
    );
};