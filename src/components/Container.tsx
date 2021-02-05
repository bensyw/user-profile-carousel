import axios from 'axios';
import { UserProfile } from "./UserProfile";
import { ProfileStepper } from "./ProfileStepper"
import { PageHeader } from "./PageHeader";
import User from '../types/User';
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
    }

    const handleBackOnClick = () => {
        const newCurrent = current - 1;
        setCurrent(newCurrent);
    }

    return (
        <div>
            <PageHeader />
            {!isLoading && (
                userData.map((user, index) => {
                    return (
                        <div className={index === current ? 'user active' : 'user'} key={user.id}>
                            {index === current && (<UserProfile user={user} />)}
                        </div>
                    )
                })
            )}
            <ProfileStepper handleNextOnClick={handleNextOnClick} handleBackOnClick={handleBackOnClick} steps={userData.length} activeStep={current} />
            <div className="pagination">{`${current + 1} / ${userData.length}`}</div>
        </div>
    )
}