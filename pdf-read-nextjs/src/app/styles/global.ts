'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        /* Color Theme Swatches in Hex */
        .skylab-rocketseat-1-hex { color: #19181F; }
        .skylab-rocketseat-2-hex { color: #67159C; }
        .skylab-rocketseat-3-hex { color: #1E1E26; }
        .skylab-rocketseat-4-hex { color: #07D962; }
        .skylab-rocketseat-5-hex { color: #E82D92; }
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    @media (max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

    body{
        background: #19181F;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }

`