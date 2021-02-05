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

const stepperStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    color: "white",
    margin: "auto",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: " 0",
    right: " 0",
    width: "100px",
    height: "50px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
            <div style={stepperStyle}>{`${activeStep + 1} / ${steps}`}</div>
            <IconButton style={backBottonStyle} size="medium" onClick={handleBackOnClick} disabled={activeStep === 0}>
                <ArrowBackIosIcon fontSize="large" style={{ color: "white" }} />
            </IconButton>
        </div>
    )
}