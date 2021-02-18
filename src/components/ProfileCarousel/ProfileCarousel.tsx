import React from 'react';
import User from '../../types/User';
import { Profile } from "../Profile/"

interface ProfileCarouselProps {
    userData: User[];
    current: number;
};

/**
 * Wrap the profile to be displayed in '.user.active' class
 * Calls Profile to render the current profile
 */
export const ProfileCarousel: React.FunctionComponent<ProfileCarouselProps> = ({ userData, current }) => {
    return (
        <>
            {userData.map((user, index) => {
                return (
                    // Add active class to the current profile for styling
                    <div className={index === current ? 'user active' : 'user'} key={user.id}>
                        {/*Only render the current profile*/}
                        {index === current && (<Profile user={user} />)}
                    </div>
                )
            })}
        </>
    );
};