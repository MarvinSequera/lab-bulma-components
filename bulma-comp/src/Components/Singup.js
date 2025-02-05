import React from 'react';
import Navbar from './Navbar'
import FormField from './Formfield'
import CoolButton from './CoolButton'

function Signup() {
    return (
        <>
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
        <CoolButton className="button is-rounded my-class is-danger is-small">Button 1</CoolButton>
        <CoolButton className ="button is-small is-success">Button 2</CoolButton>
        </>
    )   
}
export default Signup