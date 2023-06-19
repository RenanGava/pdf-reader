'use client'
import { Container, Content, SendFileStyle } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent, useContext, useState } from "react";
import axios from "axios";
import { UsePdf2Audio } from "@/context/usePdf2Audio";

export function Dashboard() {

    const [pdf, setPdf] = useState([])
    const [text, setText] = useState('')
    const { ConvertToAudio, pause } = UsePdf2Audio()

    async function handleUploadFile(event: ChangeEvent<HTMLInputElement>) {

        const data = new FormData()

        data.append('file', event.target.files[0])
        
        console.log(data);
        


        const {data: { text }} = await axios.post('http://localhost:3333/', data)

        ConvertToAudio(text)
        

        
        setTimeout(() =>{
            console.log('Pausado');
            // aqui é para pausar o audio vem direto do contexto
            pause()
        }, 3000)

    }

    return (
        <Container>
            <Content>
                <SendFileStyle>
                    <input
                        type="file"
                        onChange={handleUploadFile}
                    />
                    <div>
                        <FontAwesomeIcon
                            size="4x"
                            color="#07D962"
                            icon={faArrowUpFromBracket}
                        />
                        <p>Envie Seu PDF Para ser realizado a Leitura</p>
                    </div>

                </SendFileStyle>
            </Content>
        </Container>
    )
}
