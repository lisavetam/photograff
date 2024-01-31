import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <Box>
        <FooterContainer>
        <Row>
       

<i className="fab fa-facebook-f">
<span >
© 2024, Elizaveta Schlegel
</span>
 </i>

                
 <Column>
<FooterLink href="https://www.facebook.com/schlegeleli">
<i className="fab fa-facebook-f">
<span>
Facebook
</span>
</i>
</FooterLink>
</Column>

<Column>
<FooterLink href="https://www.instagram.com/seliza_photo/">
<i className="fab fa-instagram">
<span>
Instagram
</span>
</i>
</FooterLink>

</Column>
</Row>
</FooterContainer>
</Box>
);
};
export default Footer;