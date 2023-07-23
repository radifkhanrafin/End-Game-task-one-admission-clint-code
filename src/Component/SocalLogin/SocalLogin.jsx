import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import { useNavigate } from 'react-router-dom';

const SocalLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        console.log('google')
        googleLogin()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => console.log(error))
    }

    const handleGithubLogin = () => {
        console.log('github')
    }
    return (
        <div className='flex justify-around p-3 bg-slate-200 rounded-lg'>
            <button onClick={handleGoogleLogin}> <img src="https://i.ibb.co/PrvjGn6/google-2.png" className='w-[60px]' alt="" /></button>
            <button onClick={handleGithubLogin}> <img src="https://i.ibb.co/jWK1zcZ/github-PNG40.png" className='w-12' alt="" /></button>
        </div>
    );
};

export default SocalLogin;