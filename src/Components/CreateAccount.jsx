import React,{ useState } from "react";

export default function CreateAccount(){

    return( 
    <>    
    <h3 className='Log-into'>Create your account</h3>
    <input type={'name'} className='UserName' placeholder='User Name'></input>
    <input type={'email'} className='User' placeholder='Email'></input>
    <input type={'password'} className='Password' placeholder='Password'></input>
    </>
    )
       
} 
