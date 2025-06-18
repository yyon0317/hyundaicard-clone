# HyundaiCard Clone Project

현대카드 공식 홈페이지를 벤치마킹하여 제작한 React 기반의 클론 프로젝트입니다.  
퍼블리셔 포트폴리오 용도로 제작되었으며, 실제 디자인과 기능을 최대한 유사하게 구현하는 데 집중했습니다.

## 완성작 보기 
미리보기 : (https://hyundaicard-clone.netlify.app/)

## 프로젝트 개요

- **제작기간**: 2025년
- **목적**: 현대카드 홈페이지 UI/UX 클론, 반응형(X) 퍼블리싱 포트폴리오
- **기술스택**:
  - React (CRA)
  - SCSS (Sass module 구조로 관리)
  - Swiper.js (슬라이더 구성)
  - React Router (페이지 전환 예정)

## 주요 구현 요소

### 1. GNB(Global Navigation Bar)
- 상단 메뉴 + 하위 SubMenu 구조
- hover 시 서브메뉴 열림 / 사라짐 제어
- 마우스 아웃 시 활성화 제거

### 2. 메인 Hero 슬라이더
- Swiper를 사용한 3개 묶음 슬라이드
- autoplay / navigation(화살표) / pagination 적용
- 이미지 클릭 시 링크 연결

### 3. 카드 섹션
- Originals / Amex / Champion 카드 블록 별 구성
- hover 시 애니메이션 적용
- 카드 상세 연동 예정

### 4. 사이드바 (우측)
- 금융정보/공지사항 탭 전환
- 스크롤 시 따라오다가 특정 위치(`.scrollstop`)에서 부드럽게 정지
- `requestAnimationFrame` + `transition`으로 자연스러운 움직임 구현

### 5. 앱 다운로드 슬라이더
- Swiper 적용 / 모바일 앱 홍보 배너
- 아이콘 + 설명 + 페이지네이션 점

### 6. 소비자 정보 안내
- 이용약관/고객센터/신고페이지 등 링크 모음

### 7. Footer
- 고객센터 정보 / 회사 소개 / 사업자 정보
- 인증마크 이미지 포함

## 📁 디렉토리 구조

```
src/
├── assets/
│   ├── img/                  # 이미지 리소스
│   └── scss/
│       ├── base/             # reset, variables
│       ├── layout/      업
- 카드 상세 페이지 연결 (React Router)
- 모바일 GNB 대응 (햄버거 메뉴)
- 애니메이션 세부 효과 향상 (GSAP / AOS 고려)
- GitHub Pages 배포 및 링크 공유

---

🔗 이 프로젝트는 현대카드 공식 사이트를 참고해 **비상업적 학습 목적**으로 제작되었습니다.
