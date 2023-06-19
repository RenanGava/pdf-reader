"use client"

import { useContext, createContext, useState, ReactNode, SetStateAction, Dispatch } from 'react'

interface PdfReadContextProviderProps {
    children: ReactNode
}

interface PdfReadContextData {
    pause: () => void,
    ConvertToAudio: (text: string) => void
}

const Pdf2AudioContext = createContext<PdfReadContextData>({} as PdfReadContextData)


export function Pdf2AudioProvider({ children }: PdfReadContextProviderProps) {

    const [speaking, setSpeaking] = useState<boolean>(false)
    const synth = window.speechSynthesis;


    function pause(){

    }

    function ConvertToAudio(text: string) {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance)
        setSpeaking(synth.speaking)
    }

    return(
        <Pdf2AudioContext.Provider value={{pause, ConvertToAudio}}>
            {children}
        </Pdf2AudioContext.Provider>
    )
}




export function UsePdf2Audio(){
    const context = useContext(Pdf2AudioContext)

    return context
}