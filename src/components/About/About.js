import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const About = () => {
    const {user,name} = useContext(AuthContext)
    return (
        <div>
            <h2>This is our about page</h2>
            
        </div>
    );
};

export default About;