import styled from 'styled-components';

const Wrapper = styled.section`
  .main {
    height: max-content !important;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: max-content !important;
    }
    .gallery {
      img {
        height: max-content;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: max-content !important;
    }
    .gallery {
      img {
        height: max-content;
      }
    }
  }
`;

export default Wrapper;
