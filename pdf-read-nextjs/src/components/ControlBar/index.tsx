"use client"
import { Container, Content } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons'
import { UsePdf2Audio } from "@/context/usePdf2Audio";
import { useState } from "react";

export function ControlBar() {

    const { resume, pause, cancel, synth } = UsePdf2Audio()
    const [inAudio, setInAudio] = useState<boolean>(true)

    function handlePauseAndResume(){        

        setInAudio(!inAudio)

        if(inAudio){
            pause()
        }else{
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
                                icon={faPause}
                            />
                            :
                            <FontAwesomeIcon
                                size="4x"
                                color="#E82D92"
                                icon={faPlay}
                            />
                        }


                    </button>
                }
                <button
                    onClick={() => cancel()}
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