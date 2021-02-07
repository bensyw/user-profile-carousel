import React from 'react';
import User from '../types/User';
import { Profile } from "./Profile";

interface CarouselProps {
    userData: User[];
    current: number;
};

export const Carousel: React.FunctionComponent<CarouselProps> = ({ userData, current }) => {
    return (
        <>
            {userData.map((user, index) => {
                return (
                    <div className={index === current ? 'user active' : 'user'} key={user.id}>
                        {index === current && (<Profile user={user} />)}
                    </div>
                )
            })}
        </>
    );
};