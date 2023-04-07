![remind background img](https://user-images.githubusercontent.com/81623931/230572394-3b08bb97-b708-450a-9aea-f8b6145083c9.jpg)

<div align='center'>
    <h1>Remind</h1>

```
  "인플루언서 체험단/협찬 관리 서비스" 개인 프로젝트
    (2023년 4월 7일 ~ 🏃‍♂️)
```

  <br>
  
[🏡 Remind 홈페이지](https://remind-git-dev-soohyun-dev.vercel.app/)

본 서비스는 모바일에 최적화 되어있습니다.

</div>

<br><br><br>

## 🗳️ 목차

1. [🗳️프로젝트 소개](#%EF%B8%8F-프로젝트-소개)
2. [🖥️ 프로젝트 화면](#%EF%B8%8F-프로젝트-화면)
3. [🛠️ 사용 기술](#%EF%B8%8F-사용-기술)
4. [📌 컨벤션](#-컨벤션)
5. [🏃‍♂️ 프로젝트 진행과정](#%EF%B8%8F-프로젝트-진행과정)
6. 📜 [개발 기록](#-개발-기록)
7. [🗂️ 프로젝트 구조](#%EF%B8%8F-프로젝트-구조)

   <br><br><br>

# 🗳️ 프로젝트 소개

### 1️⃣ 인플루언서 체험단/협찬 일정 관리

- 본 서비스를 통해 사용자는 자신이 신청한 체험단 혹은 협찬의 일정을 관리할 수 있다.

<br><br><br>

# 🛠️ 사용 기술

## 💻 Web Languages / Libraries

![Vite](https://img.shields.io/badge/vite-%646CFF.svg?style=for-the-badge&logo=vite&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-004088.svg?style=for-the-badge&logo=typescript&logoColor=white) ![ReduxToolkit](https://img.shields.io/badge/Redux%20Toolkit-764ABC.svg?style=for-the-badge&logo=redux&logoColor=white) ![ReactQuery](https://img.shields.io/badge/React%20Query-FF4154.svg?style=for-the-badge&logo=reactquery&logoColor=white)

<!-- ![ReactAwesomeReveal](https://img.shields.io/badge/React%20Awesome%20Reveal-3668FF.svg?style=for-the-badge&logo=react&logoColor=white) ![ReactRouterDom](https://img.shields.io/badge/React%20Router%20DOM-4A154B.svg?style=for-the-badge&logo=react&logoColor=white) ![ErrorBoundary](https://img.shields.io/badge/Error%20Boundary-237F5AB6.svg?style=for-the-badge&logo=react&logoColor=white) ![Suspense](https://img.shields.io/badge/Suspense-1A2C34.svg?style=for-the-badge&logo=react&logoColor=white)

![StyledComponents](https://img.shields.io/badge/Styled%20Components-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white) ![Mantine](https://img.shields.io/badge/Mantine-3A33D1.svg?style=for-the-badge&logo=react&logoColor=white) -->

<br>

## 🗃️ DB & 배포

![FireBase](https://img.shields.io/badge/firebase-FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

<br>

<!-- ## 📑 Test

![Jest](https://img.shields.io/badge/jest-C21325.svg?style=for-the-badge&logo=jest&logoColor=white) ![Storybook](https://img.shields.io/badge/Storybook-FF4785.svg?style=for-the-badge&logo=Storybook&logoColor=white)

<br> -->

## ⚙️ Tools

![VisualStudioCode](https://img.shields.io/badge/Visual%20Studio%20code-007ACC.svg?style=for-the-badge&logo=visual-studio-Code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-181717.svg?style=for-the-badge&logo=github&logoColor=white) ![Git](https://img.shields.io/badge/git-F05032.svg?style=for-the-badge&logo=git&logoColor=white) ![Tistory](https://img.shields.io/badge/tistory-000000.svg?style=for-the-badge&logo=tistory&logoColor=white)
<br>

## 👨‍⚖️ Linters

![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

<br>

## 🔤 Font

![Spoqa Han Sans Neo](https://img.shields.io/badge/Spoqa%20Han%20Sans%20Neo-3668FF.svg?style=for-the-badge&logoColor=white)

<br><br><br>

# 📌 컨벤션

<details><summary><h3>🔀 코드 컨벤션</h3></summary>
<div markdown="1">

    ✔️Airbnb

    - Airbnb Eslint를 따릅니다.

</details>

<details><summary><h3>🔀 브랜치명 컨벤션</h3></summary>
<div markdown="1">

    ✔️dev

    - 항상 최신 정보를 유지하는 브랜치입니다.

    ✔️main

    - 배포용 브랜치입니다.

    ✔️ver-버전정보

    - 버전에 따라 분류한 브랜치입니다.

</details>
    
<details>
<summary><h3>🔀 PR 컨벤션</h3></summary>
<div markdown="1">

    - [Feat] 제목 (제목만 봐도 무엇을 했는지 단번에 파악할 수 있게 작성)

    - 상세 내용

    - closes 이슈번호

</details>

<details>
<summary><h3>🔀 Commit 컨벤션</h3></summary>
<div markdown="1">

- Gitmoji

- FEAT : 새로운 기능의 추가
- FIX: 버그 수정
- DOCS: 문서 수정 (리드미 작성)
- STYLE: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
- REFACTOR: 코드 리펙토링
- TEST: 테스트 코트, 리펙토링 테스트 코드 추가
- CHORE: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)

</details>

<details>
<summary><h3>🔀 Styled-Components 컨벤션</h3></summary>
<div markdown="1">

- div : '기능명'Box
- section : '기능명'Section
- ul : '기능명'List
- li : '기능명'Item
- p : '기능명'Paragraph
- span : '기능명'Span

</details>

<br><br><br>

# 🏃‍♂️ 프로젝트 진행과정

<br><br><br>

# 📜 개발 기록

[📝 이슈 목록](https://github.com/soohyun-dev/Remind/issues?q=is%3Aissue+is%3Aclosed)

<br><br><br>

# 🗂️ 프로젝트 구조

<pre> 
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┗ 📂Navbar
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜Navbar.styled.ts
 ┃ ┃ ┗ 📜Navbar.tsx
 ┣ 📂feature
 ┃ ┗ 📜userSlice.tsx
 ┣ 📂pages
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📜Home.styled.ts
 ┃ ┃ ┣ 📜Home.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜Login.styled.ts
 ┃ ┃ ┗ 📜Login.tsx
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜Main.styled.ts
 ┃ ┃ ┗ 📜Main.tsx
 ┃ ┗ 📂SignUp
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜SignUp.styled.ts
 ┃ ┃ ┗ 📜SignUp.tsx
 ┣ 📂store
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜store.tsx
 ┣ 📂styles
 ┃ ┗ 📜style.ts
 ┣ 📜App.tsx
 ┣ 📜firebase.tsx
 ┣ 📜main.tsx
 ┣ 📜Router.tsx
 ┗ 📜vite-env.d.ts
</pre>
