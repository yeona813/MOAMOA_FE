## 📘📝 MOAMOA FRONTEND
대학생 IT경영학회 KUSITMS 30기 밋업 프로젝트 G조 <br />
**MOAMOA Frontend Repository**

<br />

## ✏️ 프로젝트 소개
*”아 경험 정리 해야 하는데 .. 언제 다 하지? 미리 할 걸 ”*
<br />
*“모아모아에서 몇 마디 대화를 나눴을 뿐인데 경험 정리가 끝났어요!” 
“경험 정리를 했더니, 나의 역량을 알려줘요”*
- 모아모아(MOAMOA)는 막막하게 느껴지던 경험 정리를 매일 조금씩 하도록 돕고, AI가 경험을 분석해 나만의 역량을 찾아주는 서비스입니다.
<br><br>

## ✏️ 배포 주소
[🚗 Visit MOAMOA](https://www.corecord.site/)  
<br><br>

## ✏️ 개발 기간 및  작업 관리

### 개발 기간
2024.10 ~ 2024.11.28
<br>
**추후 리팩토링 예정**
<br>

### 작업 관리
- GitHub Projects와 Issues, Milestone을 사용하여 진행 상황을 공유했습니다.
- 매 주 2회 Discord에서 회의를 진행하여 작업 순서와 기능 구현에 대한 고민을 나누고, Notion에 회의 내용을 기록했습니다.

<br><br>

## ✏️ 팀원 소개
|  오유민  |  안연아  |                                                                                                  
| :----: | :----: |
| <img src="https://avatars.githubusercontent.com/yuminnnnni?v=4" width=90px alt="오유민"/> |<img src="https://avatars.githubusercontent.com/yeona813?v=4" width=90px alt="안연아"/>  |
| [@yuminnnnni](https://github.com/yuminnnnni) | [@yeona813](https://github.com/yeona813) |
| 아주대학교 소프트웨어학과 | 서강대학교 수학과 |

<br><br>


## ✏️ 기술 스택
**Language & Framework**  
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white" />
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat&logo=styled-components&logoColor=white" />

**Tools**  
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=Vite&logoColor=white" />
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white" />
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=ESLint&logoColor=white" />

**Deployment**  
<img src="https://img.shields.io/badge/vercel-000000?style=flat&logo=vercel&logoColor=white" />


### 🌎 Co-Work
[<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white" />](https://github.com/FITPET-A)
<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white" />
<br><br>


## ✏️ 기술 선정 이유

- **React :** 컴포넌트 기반 아키텍처를 통해 재사용성과 유지보수성을 극대화하였습니다.
- **TypeScript :** 정적 타입을 제공해서 컴파일 단계에서 오류를 미리 잡을 수 있고, 코드 유지보수가 훨씬 쉬워집니다. 자동완성과 리팩토링도 더 편리해져서 개발 속도를 개선할 수 있습니다.
- **Styled-Components :** 컴포넌트 단위로 스타일을 작성할 수 있는 라이브러리입니다. CSS가 컴포넌트에 종속되기 때문에 스타일 충돌이 없고, 동적으로 스타일을 적용할 수 있어서 유지보수에도 유리합니다.
- **Axios :** HTTP 요청을 쉽게 처리할 수 있는 클라이언트 라이브러리입니다. API 호출을 간편하게 할 수 있고, 비동기 요청 관리도 직관적이라 코드 작성이 편리합니다.
- **Vite :** 최신 빌드 도구로, 개발 환경에서 빌드 속도가 매우 빠릅니다. 특히 핫 모듈 리플레이스먼트(HMR)가 즉각적으로 작동해서 코드 수정 시 바로 반영돼서 개발 속도를 개선하였습니다.
- **Prettier & ESLint:** 코드 품질을 관리하고, 일관성과 가독성을 유지하기 위해 사용되는 도구입니다. 두 도구는 서로 다른 역할을 가지고 있지만, 함께 사용하면 더 좋은 개발 경험을 제공합니다.
- **Vercel:** Vercel은 웹 애플리케이션 배포 플랫폼으로, React, Next.js 같은 현대적인 프론트엔드 프레임워크에 최적화된 환경을 제공합니다.

<br><br>

## ✏️ 디렉토리 구조
```
pubblic/
├── font/
└── images/
src/
├── api/
├── assests/
│   │    └── icons/
├── components/
│   ├── chat/
│   ├── common/
│   │    ├── bottomSheet/
│ 	│    ├── button/
│ 	│    ├── chip/
│   │    ├── empty/
│   │    ├── input/
│   │    ├── list/
│ 	│    ├── login/
│   │    ├── modal/
│   │    ├── note/
│   │    ├── popup/
│ 	│    ├── portal/
│   │    ├── selectbox/
│   │    └── sideBar/
│   ├── editProfile/
│   ├── folder/
│   ├── home/
│   ├── keyword/
│   ├── layout/
│   ├── memo/
│   ├── my/
│   ├── record/
│   ├── report/
├── hooks/
├── pages/
│   ├── chatPage/
│   ├── editProfile/
│   ├── folderPage/
│   ├── homePage/
│   ├── keywordPage/
│   ├── listPage/
│   ├── loginPage/
│   ├── loginSuccessPage/
│   ├── memoPage/
│   ├── myPage/
│   ├── oauthPage/
│   ├── onboardingPage/
│   ├── recordCompletePage/
│   ├── registerPage/
│   └── reportPage/
├── styles/
├── types/
└── utils/
```

<br><br>

## ✏️ 코딩 컨벤션

#### Commit Convention
- **`ConventionType: 구현한 내용`** <br>

#### Convention Type
| convention type | description |
| --- | --- |
| `feat` | 새로운 기능 구현 |
| `refactor` | 코드 리팩토링 |
| `style` | 코드 의미에 영향을 주지 않는 변경사항 (코드 포맷팅, 오타 수정 등) |
| `chore` | 빌드 부분 혹은 패키지 매니저 수정 사항 및 기타 변경사항 |
| `fix` | 버그 수정 |
| `remove` | 파일 및 코드 삭제 |

#### Issue
- Issue Title : **`[ConventionType] : 작업할 내용`**
- 모든 작업은 `Issue`를 만든 후, 해당 이슈 번호에 대한 branch를 통해 수행
- 수행할 작업에 대한 설명과 할 일을 작성

#### Pull Request
- Pull Request Title : **`#이슈번호 [ContentionType] : 작업한 내용`**
- 수행한 작업에 대한 설명을 작성하고 필요시 관련 스크린샷을 첨부
- Reviewer, Assigner, Label, Project, Milestone, 관련 이슈를 태그
- 작업 중 참고한 자료 혹은 reviewer에게 전할 내용이 있다면 하단에 작성

#### Branch
- Branch Name : **`컨벤션명/작업 내용`**
- `Pull Request`를 통해 develop branch에 merge 후, 해당 branch 제거

#### Code Review
- 코드 리뷰 시 주요 내용을 요약해서 작성하고, 코드 리뷰어의 의견을 존중하는 자세로 소통했습니다.
- [PN]룰을 적용하여 효율적인 코드 리뷰를 진행했습니다.


<br><br>

## ✏️ 역할 분담
### 🐰 안연아
- UI
  - 페이지: 홈, 경험 리스트, 역량 레포트, 마이, 프로필 수정, 온보딩
  - 공통 컴포넌트: 버튼, 칩, 모달, 셀렉트박스, 사이드바, 인풋, 탭바, 팝업
- 기능
  - 홈에서 기록 조회, 폴더 조회 & 추가 & 삭제, 레포트 조회 & 수정, 로그아웃, 회원 탈퇴 

### 🐣 오유민
- UI
  - 페이지: 회원 가입, 로그인, 채팅 기록, 메모 기록, 역량 그래프, 404
  - 공통 컴포넌트: 토스트, 로딩, 채팅
- 기능
  - 카카오 소셜 로그인, 채팅/메모 기록 & 임시저장, 완료 경험 세부 조회, 역량 그래프 조회 

<br><br>

## ✏️ 페이지 별 주요 기능

### [로그인 화면]
- 카카오 소셜 로그인
- 회원 가입 (추가 정보 작성)
- 회원 가입 완료
  
<img src="public/readMe/Login.png" width="300px" alt="login" />
<img src="public/readMe/Register.png" width="300px" alt="register" />
<img src="public/readMe/LoginSuccess.png" width="300px" alt="loginSuccess" />

### [온보딩 페이지]
- 신규 로그인 유저에 한해 온보딩 페이지 출력

<img src="public/readMe/Onboarding1.png" width="300px" alt="onboarding1" />
<img src="public/readMe/Onboarding2.png" width="300px" alt="onboarding2" />
<img src="public/readMe/Onboarding3.png" width="300px" alt="onboarding3" />
<img src="public/readMe/Onboarding4.png" width="300px" alt="onboarding4" />

### [홈]
- 기록 조회
- 바텀 시트로 채팅 / 메모 기록 이동

<img src="public/readMe/Home.png" width="300px" alt="home" />
<img src="public/readMe/Home2.png" width="300px" alt="home2" />

### [AI 채팅 기록]
- 채팅 기록 시작
- 채팅 기록 임시저장
- 채팅 기록 완료

<img src="public/readMe/Chat1.png" width="300px" alt="chat1" />
<img src="public/readMe/Chat2.png" width="300px" alt="chat2" />
<img src="public/readMe/Chat3.png" width="300px" alt="chat3" />
<img src="public/readMe/Chat4.png" width="300px" alt="chat4" />


### [경험 요약 완료]
- AI 채팅 기록 완료 후 경험 요약 완료 페이지 출력

<img src="public/readMe/RecordComplete.png" width="300px" alt="recordComplete" />

### [메모 기록]
- 메모 기록

<img src="public/readMe/Memo.png" width="300px" alt="memo" />

### [로딩]
- AI 채팅 기록 중 로딩 화면 출력
- 메모 기록 & 경험 기록 완료 중 로딩 화면 출력
- 로그인 중 로딩 화면 출력

<img src="public/readMe/Loading1.png" width="300px" alt="loading1" />
<img src="public/readMe/Loading2.png" width="300px" alt="loading2" />

### [경험 모아보기]
- 경험 리스트 조회
- 폴더 추가 및 삭제

<img src="public/readMe/List1.png" width="300px" alt="list1" />
<img src="public/readMe/List2.png" width="300px" alt="list2" />
<img src="public/readMe/List3.png" width="300px" alt="list3" />
<img src="public/readMe/List4.png" width="300px" alt="list4" />

### [역량 레포트]
- 역량 키워드 별 역량 레포트 조회
- 역량 그래프 조회

<img src="public/readMe/Report1.png" width="300px" alt="report1" />
<img src="public/readMe/Report2.png" width="300px" alt="report2" />
<img src="public/readMe/Report3.png" width="300px" alt="report3" />
<img src="public/readMe/Report4.png" width="300px" alt="report4" />


### [마이 페이지]
- 프로필 수정
- 회원 탈퇴

<img src="public/readMe/My1.png" width="300px" alt="my1" />
<img src="public/readMe/My2.png" width="300px" alt="my2" />
<img src="public/readMe/My3.png" width="300px" alt="my3" />
<img src="public/readMe/My4.png" width="300px" alt="my4" />
<img src="public/readMe/My5.png" width="300px" alt="my5" />

### [404 페이지]
- 존재하지 않는 페이지 접근 시 404 페이지 출력

<img src="public/readMe/404.png" width="300px" alt="404" />