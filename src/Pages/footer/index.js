
import React from 'react'
import { Wrapper, Row, Column,  Links, Title, Container } from './styles/footer'

export default function Footer({children}) {
  return (
    <Container>{children}</Container>
  
  )
}
Footer.Wrapper = function FooterWrapper({children}){
  return <Wrapper>{children}</Wrapper>
}
Footer.Row = function FooterRow({children}){
  return <Row>{children}</Row>
}
Footer.Column = function FooterColumn({children}){
  return <Column>{children}</Column>
}
Footer.Links = function FooterLinks({children}){
  return <Links>{children}</Links>
}
Footer.Title = function FooterTitle({children}){
  return <Title>{children}</Title>
}


