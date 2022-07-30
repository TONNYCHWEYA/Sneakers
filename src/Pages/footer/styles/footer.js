import styled from "styled-components"

export const Container = styled.div`
padding: 80px 60px;
background: radial-gradient(circle, rgba(0, 0, 0, 0.3)0%, rgba(0, 0, 0, 0.3)100%);
margin-top: 50px;
background-color: black;
`
export const Wrapper= styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   max-width: 100px;
   margin: 0 auto;
`
export const Column = styled.div`
 display: flex;
 flex-direction: column;
 text-align: left;
 margin-left: 60px;

`
export const Row = styled.div`

display: flex;
justify-content: center;
gap: 20px;
`
export const Links = styled.div`
color: rgba(255,255,255, 0.3);
font-size: 18px
text-decoration: none;

`
export const Title = styled.div`
font-size: 24px;
color: rgba(255,255,255, 0.4);
margin-bottom: 20px
`