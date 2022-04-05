import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 45vh;
  grid-area: footer;
  position: absolute;
  z-index:10;
  bottom: ${({ toggle }) => toggle ? "-40vh" : "0"};
  display: grid;
  grid-template-areas:
  'marcos tikva avi . logo';
  grid-template-columns:20% 20% 20% 20% 20%;
  grid-template-rows: 100%;
  text-align: center;
  transition: 0.2s ease-in-out;
  border-radius: ${({ toggle }) => toggle ? "0" : "50px 50px 0 0"};

  .open-footer-btn  {
    cursor: pointer;
    border: none;
    border-radius: 50px 50px 0 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    right: 30%;
    top: -5vh;
    width: 10vw;
    height: 10vh;
    font-size: 1rem;
    font-weight: 900;
    font-family: 'Lobster Two', cursive;
  }
  .open-footer-icon{
    font-size: 2rem;
    transition: 0.2s ease-in-out;
  }
  .flip-arrow{
    transform: rotate(180deg)
  }

  .logo{
    grid-area: logo;
    padding:10vh 0 2vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .TripYoetz-logo {
        display:flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-family: 'Lobster Two', cursive;
        font-size:3.5rem;
        font-weight:900;
        text-decoration:none;
  }
  .logo-icon{
        border-radius:50%;
        font-size:3rem;
  }

  .about-us-link{
        text-decoration: none;
        font-size:2rem;
        font-weight:900;
        padding:5px;
        font-family: 'Lobster Two', cursive;
        background-size: 100% 3%;
        background-repeat: no-repeat;
        background-position: bottom;
        transition: 0.2s ease-in-out;
  }
  .about-us-link:hover{
        background-size: 100% 100%;
  }

  .copyright{
    font-size: 1.3rem;
  }
`