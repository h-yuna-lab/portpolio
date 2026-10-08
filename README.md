# 홍유나 — Projects

홍유나 / **h-yuna-lab**의 팀 프로젝트 포트폴리오. 담당 문서와 실제 작성 커밋을 대조해 HydroTwin의 데이터·모델·SHAP·UI 개선, CQC의 MLOps·CI/CD·복구·측정·수용시험 자동화를 소개합니다.

게시 주소: [h-yuna-lab.github.io/portpolio](https://h-yuna-lab.github.io/portpolio/)

## 로컬 확인

Node.js 22 이상을 사용합니다. 외부 npm 패키지 설치가 필요하지 않습니다.

```sh
npm run build
npm run preview
```

[로컬 미리보기](http://127.0.0.1:4173/portpolio/)에서 확인합니다. `npm run check`는 로컬 파일·앵커·JavaScript 구문·작업별 커밋 링크를 검사하며, `build`는 게시 파일만 `dist/`에 복사합니다. 원본 HTML을 직접 열어도 기본 내용을 읽을 수 있습니다.

## GitHub Pages

1. 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정합니다.
2. `main`에 푸시하면 `.github/workflows/pages.yml`이 검증·빌드·게시를 수행합니다. Actions의 **Deploy portfolio to GitHub Pages**에서 수동 실행할 수도 있습니다.
3. PR은 빌드 검증만 실행합니다. 배포에는 `github-pages` 환경과 `pages: write`, `id-token: write` 권한을 사용합니다.

상대 경로를 사용하므로 `/portpolio/` 프로젝트 경로에서 CSS·JS·이미지가 정상 동작합니다. `.nojekyll`도 포함했습니다. 서버·DB·API 키가 없는 정적 사이트입니다.

## 파일

- `index.html`: 한국어 프로젝트 소개와 작업별 근거 링크
- `styles.css`: 참고 페이지의 큰 제목·밝은 배경을 바탕으로 한 반응형 디자인
- `script.js`: 키보드로 조작 가능한 화면 탭과 이미지 확대 대화상자
- `assets/`: HydroTwin 팀 실행 화면과 포트폴리오 파비콘
- `docs/evidence.md`: 역할·작성자 확인 기준과 작업별 원문·커밋 매핑
- `scripts/`: 검증·정적 빌드·로컬 미리보기

## 내용과 출처

확인 기준일: **2026-10-08**. [기여 근거 목록](docs/evidence.md)을 먼저 확인하세요. CQC의 담당 QA 9건은 2026-10-07 회차 결과이며 전체 수용시험 완료로 확대하지 않았습니다. CPU 합성 입력의 벤치마크와 실제 운영 처리량도 구분했습니다.

디자인 참고 및 팀 화면 출처: [yuudong123/portpolio-page](https://github.com/yuudong123/portpolio-page). 화면은 팀 공동 결과물이며, 홍유나의 UI 기여는 해당 변경 커밋으로 확인합니다. 다른 팀원의 CQC 모델·관제 화면이나 HydroTwin Unity·전체 시스템 구축을 개인 작업으로 기재하지 않았습니다.

GitHub Pages 구성은 [GitHub 공식 custom workflow 문서](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)를 따릅니다.
