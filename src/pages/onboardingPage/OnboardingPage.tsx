import { useNavigate } from 'react-router-dom';
import * as S from './OnboardingPage.Style';
import CloseIcon from '@icons/CloseIcon.svg';
import Image1 from '/images/OnBoarding1.png';
import Image2 from '/images/OnBoarding2.png';
import Image3 from '/images/OnBoarding3.png';
import Image4 from '/images/OnBoarding4.png';
import { useState } from 'react';
import { Button } from '@/components/common/button/Button';

const CONTENT_DATA = [
  {
    index: 1,
    chip: 'AI 채팅 기록',
    highlightText: 'AI와의 대화만으로',
    text: '경험을 알아서 정리해줘요',
    image: Image1,
  },
  {
    index: 2,
    chip: '메모 기록',
    highlightText: '빠르고 간편하게',
    text: '기록할 수 있어요',
    image: Image2,
  },
  {
    index: 3,
    chip: '내 역량 분석',
    text: '나의 경험 속',
    highlightText: '핵심 역량',
    textAfter: '을 찾아드려요',
    image: Image3,
  },
  {
    index: 4,
    chip: '메모 기록',
    highlightText: '나만의 강점을',
    text: '한 눈에 파악할 수 있어요',
    image: Image4,
  },
];

export const OnboardingPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (index: number) => {
    setCurrentIndex(index);
  };

  const handleClickLast = () => {
    navigate('/home');
  };

  return (
    <S.Cotainer>
      <S.Icon src={CloseIcon} alt="닫기" onClick={() => navigate('/home')} />
      <S.Chips>{CONTENT_DATA[currentIndex].chip}</S.Chips>
      <S.TextContainer>
        {CONTENT_DATA[currentIndex].textAfter ? (
          <>
            <S.Text>{CONTENT_DATA[currentIndex].text}</S.Text>
            <S.AfterText>
              <S.Highlight>{CONTENT_DATA[currentIndex].highlightText}</S.Highlight>
              <S.Text>{CONTENT_DATA[currentIndex].textAfter}</S.Text>
            </S.AfterText>
          </>
        ) : (
          <>
            <S.Highlight>{CONTENT_DATA[currentIndex].highlightText}</S.Highlight>
            <S.Text>{CONTENT_DATA[currentIndex].text}</S.Text>
          </>
        )}
      </S.TextContainer>
      <S.Circles>
        {CONTENT_DATA.map((_, index) => (
          <S.Circle
            key={index}
            $isSelected={index === currentIndex}
            onClick={() => handleSwipe(index)}
          />
        ))}
      </S.Circles>
      <S.Image src={CONTENT_DATA[currentIndex].image} />
      <S.ButtonContainer>
        <Button
          styleType="basic"
          onClick={() => {
            if (currentIndex === CONTENT_DATA.length - 1) {
              handleClickLast();
            } else {
              setCurrentIndex(currentIndex + 1);
            }
          }}
        >
          {currentIndex === CONTENT_DATA.length - 1 ? '시작하기' : '다음'}
        </Button>
      </S.ButtonContainer>
    </S.Cotainer>
  );
};
