import React from "react";
import Footer from '../Pages/footer'


export default function FooterContainer() {
  return (
  <Footer>
    <Footer.Wrapper>

      <Footer.Row>
      <Footer.Column>
        <Footer.Title>About Us</Footer.Title>
        <Footer.Links href="#">Stroy</Footer.Links>
        <Footer.Links href="#">Clients</Footer.Links>
        <Footer.Links href="#">Testimonials</Footer.Links>
      </Footer.Column>
      <Footer.Column>
        <Footer.Title>Services</Footer.Title>
        <Footer.Links href="#">Marketing</Footer.Links>
        <Footer.Links href="#">Development</Footer.Links>
        <Footer.Links href="#">Design</Footer.Links>
        <Footer.Links href="#">Consulting</Footer.Links>
      </Footer.Column>
      <Footer.Column>
        <Footer.Title>Contact Us </Footer.Title>
        <Footer.Links href="#">Kenya </Footer.Links>
        <Footer.Links href="#">Uganda</Footer.Links>
        <Footer.Links href="#">Tanzania</Footer.Links>
        <Footer.Links href="#">Rwanda</Footer.Links>
      </Footer.Column>
      <Footer.Column>
        <Footer.Title>Social</Footer.Title>
        <Footer.Links href="#">Facebook</Footer.Links>
        <Footer.Links href="#">Instagram</Footer.Links>
        <Footer.Links href="#">Youtube</Footer.Links>
        <Footer.Links href="#">Twitter</Footer.Links>
      </Footer.Column>
      </Footer.Row>.
    </Footer.Wrapper>
  </Footer>
  )
}

