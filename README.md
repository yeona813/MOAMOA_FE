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

## ✏️ 개발 기간
2024.10 ~ ing
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

<br><br>

## ✏️ 주요 기능


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
