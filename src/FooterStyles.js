import styled from "styled-components";
 
export const Box = styled.div`
    padding: 5% 20%;
    background: grey;
    // position: absolute;
    bottom: 0;
    width: 95%;


 
    @media (max-width: 1000px) {
        // padding: 70px 30px;
    }
`;
 
export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    margin: 0 auto;

`;
 
export const Column = styled.div`
    display: flex;
    margin-left: 100px;
`;
 
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 20px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;
 
export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 5px;
    font-size: 16px;
    text-decoration: none;
    font-family: 'Poppins', sans-serif; 
 
    &:hover {
        color: #ff5933;
        transition: 200ms ease-in;
    }
`;
 
