import React from 'react'
import { Button, MobileStepper } from '@material-ui/core/';

interface ProfileStepperProps {
    handleNextOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleBackOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    steps: number;
    activeStep: number;
};

export const ProfileStepper: React.FunctionComponent<ProfileStepperProps> = ({ handleNextOnClick, handleBackOnClick, steps, activeStep }) => {
    return (
        <MobileStepper
            variant="text"
            steps={10}
            position="static"
            activeStep={activeStep}
            nextButton={
                <Button size="small" onClick={handleNextOnClick} disabled={activeStep === steps - 1}>
                    Next
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBackOnClick} disabled={activeStep === 0}>
                    Back
                </Button>
            }
        />
    )
}