'use client'
import { Container, Content, SendFileStyle } from "./style";
import { FileUploader } from "react-drag-drop-files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

export function Dashboard() {

    const [pdf, setPdf] = useState<File>()

    function handleUploadFile(file: File){
        setPdf(file)
        console.log();
    }

    return (
        <Container>
            <FileUploader
                handleChange={handleUploadFile}
                name= "files"
            >
                <Content>
                    <SendFileStyle>
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
            </FileUploader>
        </Container>
    )
}
