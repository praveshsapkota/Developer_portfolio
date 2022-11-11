import '../styles/globals.css'
import Head from "next/head"
// import { Logo } from "./page.styles"


import styled from "styled-components"

export const Logo = styled.span`
font-family: 'Galindo';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 68px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.16em;

color: #FDFDFD;

text-shadow: -3px -1px 0px #FFFFFF;

`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head>
        <Logo>
          pravesh sapkota
        </Logo>
      </Head>

      <body>
        <div className='relative'>
          <div>
            <span>

            </span>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
