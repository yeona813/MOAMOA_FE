import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './SignUpPageStyle';
import { Input } from '../../components/common/input/Input';
import { SelectBox } from '../../components/common/selectbox/SelectBox';
import { Button } from '../../components/common/button/Button';
import { TabBar } from '../../components/layout/tabBar/TabBar';
import { registerUser } from '../../api/Oauth';

const statusOptions = ['대학생', '대학원생', '취업준비생', '인턴', '재직중'];

export const SignUpPage = () => {
  const [nickname, setNickname] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const token = location.state?.token;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      console.error('등록 토큰이 없습니다.');
      return;
    }
    try {
      const apiResponse = await registerUser(token, nickname, status);
      console.log('회원가입 완료. 사용자 정보:', apiResponse);
      navigate('/login/success');
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setNickname(value);
    }
  };

  return (
    <>
      <TabBar leftText="회원가입" />
      <S.Container>
        <S.Title>추가 정보 작성</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.InputWrapper>
            <S.Label>닉네임</S.Label>
            <Input
              placeholder="10자 이내로 입력해주세요."
              value={nickname}
              onChange={handleNicknameChange}
              maxLength={10}
              required
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>현소속</S.Label>
            <SelectBox select={status} onChange={setStatus} selectData={statusOptions} />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <Button
              $styleType="basic"
              disabled={!nickname || !status}
            >
              완료
            </Button>
          </S.ButtonWrapper>
        </S.Form>
      </S.Container>
    </>
  );
};
