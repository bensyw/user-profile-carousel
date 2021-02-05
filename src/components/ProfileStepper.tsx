import React from 'react'
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

interface ProfileStepperProps {
    handleNextOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleBackOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    steps: number;
    activeStep: number;
};

const nextBottonStyle: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    right: "10%"
};

const backBottonStyle: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "10%"
};

export const ProfileStepper: React.FunctionComponent<ProfileStepperProps> = ({ handleNextOnClick, handleBackOnClick, steps, activeStep }) => {
    return (
        <div>
            <IconButton style={nextBottonStyle} size="medium" onClick={handleNextOnClick} disabled={activeStep === steps - 1}>
                <ArrowForwardIosIcon fontSize="large" style={{ color: "white" }} />
            </IconButton>
            <IconButton style={backBottonStyle} size="medium" onClick={handleBackOnClick} disabled={activeStep === 0}>
                <ArrowBackIosIcon fontSize="large" style={{ color: "white" }} />
            </IconButton>
        </div>
    )
}