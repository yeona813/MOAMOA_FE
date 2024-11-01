import * as S from './InputStyle';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  errorMessage: string;
}

export const Input = ({ isError, errorMessage, ...props }: InputProps) => {
  return (
    <S.Container>
      <S.Input $isError={isError} {...props} />
      {isError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
};
