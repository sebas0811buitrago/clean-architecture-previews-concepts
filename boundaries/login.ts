type LoginService = (
  user: string,
  password: string
) => {
  name: string;
  email: string;
  token: string;
};

const weblogin = (
  user: string,
  password: string,
  loginService: LoginService
) => {
  try {
    const token = loginService(user, password);

    console.log('user logg in succesfully', token);
  } catch {
    console.log('wrong credentials ');
  }
};

// =========== BOUNDARIE

const LoginGoogle: LoginService = (user, password) => {
  // call google auth service

  return {
    email: 'abc@gmai.com',
    name: 'abc',
    token: '123'
  };
};

const LoginApp: LoginService = (user, password) => {
  // call backend custom endpoints

  return {
    email: 'abc@gmai.com',
    name: 'abc',
    token: '123'
  };
};

weblogin('jesus', '123', LoginGoogle);

weblogin('ana', '123', LoginApp);
