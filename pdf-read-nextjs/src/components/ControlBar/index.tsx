"use client"
import { Container, Content } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons'
import { UsePdf2Audio } from "@/context/usePdf2Audio";
import { useState } from "react";

export function ControlBar() {

    const { resume, pause, speaking } = UsePdf2Audio()
    const [inAudio, setInAudio] = useState<boolean>(!speaking)

    function handlePauseAndResume(){
        

        if(inAudio){
            setInAudio(false)
            pause()
        }else{
            setInAudio(true)
            resume()
        }
    }


    return (
        <Container>
            <Content>
                {
                    <button
                        onClick={() => handlePauseAndResume()}
                    >
                        {inAudio
                            ?
                            <FontAwesomeIcon
                                color="#E82D92"
                                size="4x"
                                icon={faPlay}
                            />
                            :
                            <FontAwesomeIcon
                                size="4x"
                                color="#E82D92"
                                icon={faPause}
                            />
                        }


                    </button>
                }
                <button
                    onClick={() => pause()}
                >
                    <FontAwesomeIcon
                        size="4x"
                        color="#E82D92"
                        icon={faXmarkCircle}
                    />
                </button>
            </Content>
        </Container>
    )
}