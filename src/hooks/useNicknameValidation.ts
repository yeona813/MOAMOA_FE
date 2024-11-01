import { useState } from 'react';

export const useNicknameValidation = () => {
  const [nickname, setNickname] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const nicknameReg = /[!@#$%^&*()_\-+={}:'"\\|,.<>?/~`[\]]/g;

    if (nicknameReg.test(value)) {
      setErrorMessage('특수문자는 입력이 불가능해요');
      setIsError(true);
    } else if (value.length < 2 || value.length > 10) {
      setErrorMessage('10자 이내의 닉네임을 입력해주세요');
      setIsError(true);
    } else {
      setErrorMessage('');
      setIsError(false);
    }

    setNickname(value);
  };

  return {
    nickname,
    isError,
    errorMessage,
    onChangeNickname,
  };
};
