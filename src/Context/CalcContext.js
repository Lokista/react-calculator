import { createContext } from 'react'

export const CalcContext = createContext();
export const CalcProvider = () => {
    return(
        <CalcContext.Provider>
             
        </CalcContext.Provider>
    )
}