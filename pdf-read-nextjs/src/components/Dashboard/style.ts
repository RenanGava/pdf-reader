'use client'
import styled from 'styled-components'


export const Container = styled.main`
    width: 100%; 
    height: calc(100vh - 5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

export const Content = styled.div`
    width: 100%;
    max-width: 750px;
    height: 50vh;
    background-color: #67159C;
    border-radius: 0.8rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        filter: brightness(0.8);
    }

    &::before, &::after{
        content: '';
        position: absolute;
        z-index: -1;
        width: calc(100% + 10px);
        height: calc(50vh + 10px);
        background: linear-gradient(45deg, #67159C, #E82D92);
        border-radius: 0.8rem;

    }

    &::after{
        filter: blur(10px);
    }
`

export const SendFileStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 0.1rem;
    padding-top: 2rem;
    position: relative;
    div > p{
        display: block;
        color: #1E1E26;
        font-weight: 700;
        font-size: 1.1rem;
        padding: 3rem;
    }

    input{
        /* width: 100%;
        height: 20rem; */
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        opacity: 0;
    }

`