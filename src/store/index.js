import { create } from "zustand";
import { devtools } from 'zustand/middleware';

const initUser = {
    name : 'the octocat' , 
    login : 'octocat',
    created_at : '25 Jan 2011' , 
    public_repos : 8,
    followers : 3938 , 
    following : 9,
    bio : 'This profile has no bio' , 
    avatar_url : '/avatar.png' , 
    location : 'san francisco' , 
    twitter_username : '' , 
    html_url : '' , 
    company : null  , 
    blog: 'https://github.blog' 
}

export const useAppStore = create(
    devtools(
        (set) => (
            {
                theme: 'dark',
                loading : false , 
                user : {...initUser},
                switchTheme: () => set((prevState) => ({ theme : prevState.theme === 'light' ? 'dark' : 'light' })) , 
                setLoading : (value) => set( prevState => ({ loading : value })) , 
                setUser : (user) => set( prevState => ({ user : {...user}}))
            }
        )
    )
)