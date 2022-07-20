import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  div {
    min-width: 300px;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form-control {
      margin-bottom: 1.25rem;
      h5 {
        margin-bottom: 0.5rem;
      }
    }
    .input {
      width: 100%;
      padding: 0.5rem;
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      letter-spacing: var(--spacing);
    }
    .input::placeholder {
      text-transform: capitalize;
    }
    .links {
      width: 100%;
      margin-top: 1.25rem;
      display: flex;
      justify-content: center;
    }
    .link {
      font-size: 1rem;
      color: var(--clr-primary-1);
      text-transform: capitalize;
    }
    .seperator {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 1.25rem;
      span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.25rem;
        background: white;
      }
      hr {
        width: 100%;
      }
    }
    .forgot-btn {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }
`;

export default Wrapper;
