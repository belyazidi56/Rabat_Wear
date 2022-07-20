import React, { useState, useEffect } from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/user_context';
import { toast } from 'react-toastify';
import Button from '../../components/Button';

function ForgotPasswordPage() {
  const { forgotPassword } = useUserContext();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error('Please enter e-mail');
    }

    setIsSubmitting(true);
    forgotPassword(email)
      .then((res) => {
        toast.info(
          'A password reset link has been sent, check your inbox and follow the instruction'
        );
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      })
      .finally(() => setIsSubmitting(false));
  };

  useEffect(() => {
    document.title = 'RabatWear | Forgot Password';
  }, []);

  return (
    <Wrapper className='page-100'>
      <div>
        <div className='title'>
          <h2>Forgot</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className='form-control'>
            <input
              type='email'
              className='input'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* end email */}

          <Button
            disabled={isSubmitting}
            type='submit'
            className='btn forgot-btn'
          >
            submit
          </Button>

          <div className='seperator'>
            <hr />
            <span>or</span>
          </div>
          <div className='links'>
            <Link to='/login' className='link'>
              login
            </Link>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default ForgotPasswordPage;
