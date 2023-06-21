'use client'
import { Container } from "./style";
import Link from 'next/link'

export function Header(){
    return(
        <Container>
            <h1>Translate PDF</h1>
            <Link
                href='/about'
            >
                Sobre o site
            </Link>
        </Container>
    )
}