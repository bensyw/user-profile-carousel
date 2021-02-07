import axios from 'axios';
import { ProfileCarousel } from "../ProfileCarousel/ProfileCarousel";
import { ProfileStepper } from "../ProfileStepper/ProfileStepper"
import { PageFooter } from '../PageFooter/PageFooter';
import { PageHeader } from "../PageHeader/PageHeader";
import User from '../../types/User';
import React, { useState, useEffect } from 'react';

/**
 * Renders a carousel of user profiles fetched from API
 */
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

    // next button will removed for the last profile
    // overflow will not occur
    const handleNextOnClick = () => {
        const newCurrent = current + 1;
        setCurrent(newCurrent);
    };

    // back button will removed for the first profile
    // underflow will not occur
    const handleBackOnClick = () => {
        const newCurrent = current - 1;
        setCurrent(newCurrent);
    };

    return (
        <div>
            <PageHeader />
            {/* Renders loading text while loading
                Renders a carousel of profiles after the loading is finished*/}
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