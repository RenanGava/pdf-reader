'use client'
import { Container, Content, SendFileStyle } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent } from "react";
import axios from "axios";
import { UsePdf2Audio } from "@/context/usePdf2Audio";
import { ControlBar } from "../ControlBar";

import { config } from 'dotenv'

config()

export function Dashboard() {

    const { ConvertToAudio, speaking } = UsePdf2Audio()

    async function handleUploadFile(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()

        const data = new FormData()

        data.append('file', event.target.files[0])
        console.log(data.values());

        if (data.values() === null) {
            console.log("nenhum Arquivo Foi enviado!");
            return
        }


        // data.append('file', event.target.files[0])
        
        const { data: { text } } = await axios.post('https://pdf-read.fly.dev/', data)
        console.log(text);
        


        ConvertToAudio(text)

    }

    console.log(process.env.API_URL);

    return (
        <Container>
            {speaking && <ControlBar />}
            <Content>
                <SendFileStyle>
                    <input
                        type="file"
                        onChange={handleUploadFile}
                        disabled={speaking}
                    />
                    <div>
                        <FontAwesomeIcon
                            size="4x"
                            color="#07D962"
                            icon={faArrowUpFromBracket}
                        />
                        <p>Envie seu PDF para ser realizada a leitura!</p>
                    </div>

                </SendFileStyle>
            </Content>
        </Container>
    )
}
