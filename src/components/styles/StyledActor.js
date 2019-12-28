import styled from "styled-components";

export const StyledActor = styled.div`
  font-family: "Abel", sans-serif;
  color: #fff;
  background: #1c1c1c;
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: top;
    border-radius: 15px;

    @media screen and (max-width: 500px) {
      object-fit: contain;
    }
  }

  .actor-name {
    display: block;
    font-size: 18px;
    margin: 10px 0 0 0;
  }

  .actor-character {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
  }
`;
