import React from 'react';
import { Container, Form, FormWrap,FormContent, FormH1, FormInput, FormLabel, Icon, FormButton, Text } from './SignInElement';

const Signin = () => {
  return (
  <Container>
      <FormWrap>
          <Icon to='/'>TshibsFy</Icon>
          <FormContent>
              <Form>
                  <FormH1>Sign in to your account</FormH1>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <FormInput type='email' required />
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <FormInput type='password' required />
                  <FormButton htmlFor='email'>Email</FormButton>
                  <Text>Forgot password ? </Text>
              </Form>
          </FormContent>
      </FormWrap>
  </Container>
  );
};

export default Signin;
