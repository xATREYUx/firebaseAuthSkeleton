import styled from "styled-components";

export const NavBarContainer = styled.div`
  .image-upload.center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .image-upload__preview {
    width: 13rem;
    height: 13rem;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
  }

  .image-upload__preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
