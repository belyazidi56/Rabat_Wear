import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 1rem;
  margin-bottom: 2rem;
  .modal {
  }
  .hide {
    display: none;
  }
  .form {
    margin: 1rem 0;
    .input {
      width: 100%;
      margin-top: 0.5rem;
      padding: 0.5rem;
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      letter-spacing: var(--spacing);
    }
    .input::placeholder {
      text-transform: capitalize;
    }
    .btn-container {
      margin-top: 0.5rem;
      display: flex;
      a {
        width: 100%;
        text-align: center;
      }
      button {
        width: 50%;
        margin-right: 0.5rem;
      }
    }
    .btn-outline {
      background: transparent;
      border: 1px solid var(--clr-primary-5);
      color: var(--clr-primary-5);
      box-shadow: none;
    }
  }
  @media (min-width: 992px) {
    .form {
      .btn-container {
        a {
          width: fit-content;
        }
        button {
          width: 20%;
        }
      }
    }
  }
`;

export default Wrapper;
