import React,{ useState } from "react";
import applelogo from '../images/apple.svg';
import googlelogo from '../images/google-icon.svg';
export default function CreateAccount(){

    return( 
    <>    
    <h3 className='Log-into'>Create your account</h3>
    <input type={'name'} className='UserName' placeholder='User Name'></input>
    <input type={'email'} className='User' placeholder='Email'></input>
    <input type={'password'} className='Password' placeholder='Password'></input>
    <div className='apple'>
        <img className="applelogo" src={applelogo} alt="apple" />
        <img className="googlelogo"src={googlelogo} alt="gogle"/>
    </div>
    </>
    )
       
} 


