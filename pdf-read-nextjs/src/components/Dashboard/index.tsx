'use client'
import { Container, Content, SendFileStyle } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent, useState } from "react";
import axios from "axios";

export function Dashboard() {

    const [pdf, setPdf] = useState([])

    function handleUploadFile(event: ChangeEvent<HTMLInputElement>) {

        const data = new FormData()

        data.append('file', event.target.files[0])
        
        console.log(data);
        


        axios.post('http://localhost:3333/', data)
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
