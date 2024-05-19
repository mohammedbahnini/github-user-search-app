import React, { useRef, useState } from 'react'
import SearchIcon from './SearchIcon'
import Input from './Input'
import Button from './Button'
import { useAppStore } from '../../store'
import cn from 'classnames'
import ErrorMessage from './ErrorMessage'
import { getUser } from '../../api/get-user'
import { format } from 'date-fns';

function Search() {
    const { theme , loading ,setLoading , setUser } = useAppStore(store => store);
    const isDark = theme === 'dark';
    const [username, setUserName] = useState(null);
    const [error, setError] = useState('');

    const handleSumbit = async (e) => {
        e.preventDefault();
        if (username === null || username.trim() === '') {
            setError('Please fill the field with a valid username !');
        }
        else {
            // call the api getuser
            setLoading(true);
            const result = await getUser(username);
            console.log(result);
           
            if( result.error){
                setError('An error occured while getting data !');
                setLoading(false);
            }
            else{
                setError('');
                setLoading(false);

                const  {
                    name  , 
                    login ,
                    created_at , 
                    public_repos ,
                    followers   , 
                    following ,
                    bio ,
                    avatar_url ,
                    location ,
                    twitter_username  ,
                    html_url  ,
                    company ,
                    blog ,
                } = result.data


                const resultUser = {
                    name  , 
                    login ,
                    created_at : format(new Date(created_at) , 'dd MMM yyyy') , 
                    public_repos ,
                    followers   , 
                    following ,
                    bio ,
                    avatar_url ,
                    location ,
                    twitter_username  ,
                    html_url  ,
                    company ,
                    blog ,
                } ;

                setUser(resultUser);
            }

        }

    }


    return (
        <div className='mt-9'>
            <div className="container">
                <form
                    className={cn('flex items-center py-2 px-4 gap-x-2  rounded-2xl md:pr-[10px] md:pl-8 lg:py-[10px] lg:gap-x-6 theme-transition', {
                        'bg-dark-violet': isDark,
                        'bg-white shadow-light-mode ': !isDark
                    })}
                    onSubmit={handleSumbit}
                >
                    <SearchIcon />
                    <Input isDark={isDark} handleOnChange={setUserName} />
                    <Button />
                </form>

                {error && <ErrorMessage error={error} />}

            </div>
        </div>
    )
}

export default Search
