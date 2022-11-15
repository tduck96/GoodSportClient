import {createContext, useState } from 'react';

const DogContext = createContext({});

export const DogProvider = ({children}) => {

const [dogInfo, setDogInfo] = useState({});

return (
    <DogContext.Provider value={{ 
        dogInfo, setDogInfo
     }}>
        {children}
    </DogContext.Provider>
)
}

export default DogContext;
