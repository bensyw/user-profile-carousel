import axios from 'axios'
import { UserProfile } from "./UserProfile";
import User from '../types/User'
import React, { useState, useEffect } from 'react'
import { Pagination } from '@material-ui/lab';

export const Container: React.FunctionComponent = () => {

    const [user, setuser] = useState<User[]>([]);
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/users');
            setuser(result.data);
            setIsLoading(false)
        }
        fetchUser();
    }, [])

    const handleChangePage = (event: object, page: number) => {
        setIndex(page - 1);
    }

    return (
        <div>
            {isLoading ? null : <UserProfile user={user[index]} />}
            <Pagination count={user.length} color="primary" showFirstButton showLastButton onChange={handleChangePage} />
        </div>
    )
}