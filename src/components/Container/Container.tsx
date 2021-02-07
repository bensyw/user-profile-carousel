import axios from 'axios';
import { ProfileCarousel } from "../ProfileCarousel/ProfileCarousel";
import { ProfileStepper } from "../ProfileStepper/ProfileStepper"
import { PageFooter } from '../PageFooter/PageFooter';
import { PageHeader } from "../PageHeader/PageHeader";
import User from '../../types/User';
import React, { useState, useEffect } from 'react';


export const Container: React.FunctionComponent = () => {

    const [userData, setUserData] = useState<User[]>([]);
    const [current, setCurrent] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/users');
            setUserData(result.data);
            setIsLoading(false);
        }
        fetchUser();
    }, []);

    const handleNextOnClick = () => {
        const newCurrent = current + 1;
        setCurrent(newCurrent);
    };

    const handleBackOnClick = () => {
        const newCurrent = current - 1;
        setCurrent(newCurrent);
    };

    return (
        <div>
            <PageHeader />
            {isLoading ? <b className="loading-text">Loading...</b> : (
                <>
                    <ProfileCarousel userData={userData} current={current} />
                    <ProfileStepper handleNextOnClick={handleNextOnClick} handleBackOnClick={handleBackOnClick} current={current} length={userData.length} />
                    <PageFooter current={current} length={userData.length} />
                </>
            )}
        </div>
    );
}