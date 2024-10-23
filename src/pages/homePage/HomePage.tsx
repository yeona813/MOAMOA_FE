import { Button } from '../../components/common/button/Button';

export const HomePage = () => {
  return (
    <div>
      <a href="https://api.corecord.site/ouath2/authorization/kakao">
        <Button buttonStyle="shadow">저장하기</Button>
      </a>
      <Button buttonStyle="shadow" disabled={true}>
        저장하기
      </Button>
      <Button buttonStyle="shadow" icon="/icons/RecordIcon.svg">
        기록하러 가기
      </Button>
      <Button buttonStyle="small">채팅 다시보기</Button>
      <Button buttonStyle="basic">완료</Button>
      <Button buttonStyle="basic" disabled={true}>
        완료
      </Button>
      <Button buttonStyle="popupRight">계속 작성하기</Button>
      <Button buttonStyle="popupLeft">나가기</Button>
    </div>
  );
};
