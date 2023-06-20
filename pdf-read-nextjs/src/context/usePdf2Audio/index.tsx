"use client"
import { useContext, createContext, useState, ReactNode } from 'react'

interface PdfReadContextProviderProps {
    children: ReactNode
}

interface PdfReadContextData {
    pause: () => boolean,
    resume: () => boolean,
    cancel: () => void,
    speaking: boolean
    ConvertToAudio: (text: string) => void,
    synth: SpeechSynthesis
}

const Pdf2AudioContext = createContext<PdfReadContextData>({} as PdfReadContextData)

export function Pdf2AudioProvider({ children }: PdfReadContextProviderProps) {

    const [speaking, setSpeaking] = useState<boolean>(false)

    // aqui instaciamos o método que trasnforma string em áudio.
    const synth = window.speechSynthesis;

    function ConvertToAudio(text: string) {
        // aqui convertemos a string para um formato
        // que possa ser transformado em audio.
        const utterance = new SpeechSynthesisUtterance(text);
        setSpeaking(true)
        synth.speak(utterance)
    }

    // continua o processo de audio atual que havia sido pausado
    function resume() {
        synth.resume()
        return synth.paused
    }

    // pausa o processo que audio atual
    function pause() {
        synth.pause()
        return synth.paused
    }

    // cancela todos os processos na fila para serem convertidos em audio.
    function cancel() {
        setSpeaking(false)
        synth.cancel()
    }

    return (
        <Pdf2AudioContext.Provider value={{
            cancel,
            resume,
            pause,
            ConvertToAudio,
            speaking,
            synth,
        }}>
            {children}
        </Pdf2AudioContext.Provider>
    )
}




export function UsePdf2Audio() {
    const context = useContext(Pdf2AudioContext)

    return context
}