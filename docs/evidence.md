# 홍유나 / h-yuna-lab 기여 확인 기록

확인 기준일: **2026-10-08**. 역할 문서만으로 구현 완료를 판단하지 않고, 작성 커밋의 변경 파일·diff와 결과 기록을 함께 확인했다. 병합 커밋은 개인 구현의 근거에서 제외했다.

## 작성자 확인

Git 이력에 등장하는 `hyu`, `유나`, `Yuna Hong`은 동일한 작성 이메일로 연결된다. 이메일 자체는 페이지에 노출하지 않았다. 다음 GitHub 커밋 API에서도 작성 계정 `author.login = h-yuna-lab`을 직접 확인했다.

- [HydroTwin EDA 커밋][h-eda] — Git author `hyu`, [GitHub API](https://api.github.com/repos/yuudong123/ai-first-project/commits/181d2dce99bcbd985b5a35e81f4c45b34191be2f)
- [CQC Jenkins·복구 커밋][c-deploy] — Git author `Yuna Hong`, [GitHub API](https://api.github.com/repos/yuudong123/CQC/commits/17490ab25c4778bc425aa83c42b6e125c307449c)

역할 확인 원문은 변경되지 않도록 확인한 시점의 Git SHA에 고정했다. 개인 작업은 해당 작성자의 커밋 단위로 연결했다.

## HydroTwin

- 확인한 저장소 HEAD: `09c495e0767aa615e5e6bd1f155bf65c41f7ded2` (master)
- [담당 작업 문서][h-role]: 홍유나 — 데이터·EDA·특징 추출·모델·평가·SHAP
- [팀 역할·마일스톤](https://github.com/yuudong123/ai-first-project/blob/09c495e0767aa615e5e6bd1f155bf65c41f7ded2/docs/team-milestones.md)

| 페이지의 작업                         | 작성 커밋                         | 실제 변경·확인 범위                                                                                                                                                                 |
| ------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 데이터 분석·EDA                       | [181d2dc][h-eda], 2026-08-31      | `notebooks/01_data_analysis.ipynb` 등 분석 노트북                                                                                                                                   |
| 학습·분할                             | [46d649b][h-train], 2026-08-31    | `notebooks/02_model_training.ipynb`                                                                                                                                                 |
| 모델 평가·SHAP                        | [b8e4c12][h-shap], 2026-08-31     | `notebooks/03_model_evaluation.ipynb`                                                                                                                                               |
| 전처리·특징·학습·평가·설명 파이프라인 | [25f6e1d][h-pipeline], 2026-09-01 | `src/hydrotwin_pipeline.py`, `src/data/`, `src/features/`, `src/model/` 실행 모듈과 노트북. 센서 평균 특징, cycle_id 공통 분할·중복 검사, Accuracy·Macro F1·혼동행렬·SHAP 실행 흐름 |
| RandomForest 전환                     | [aec2086][h-rf], 2026-09-09       | 모델 경로·학습 분류기·번들 타입을 RF로 변경. 저장소 현재 README의 LightGBM 실행 계약과 개인 RF 변경 이력은 구분                                                                     |
| 대시보드 레이아웃                     | [f11ebc0][h-layout], 2026-09-04   | `web/index.html` UI 레이아웃·디자인                                                                                                                                                 |
| 사이드바 너비 조절                    | [6ffee3a][h-sidebar], 2026-09-04  | `web/index.html` 너비 조절 기능                                                                                                                                                     |
| 이상 상세·상위 영향 센서 그래프       | [703b2b6][h-popup], 2026-09-07    | `web/index.html` 이상 모달·영향 센서 3개 그래프                                                                                                                                     |
| 센서 분석 UI 개선                     | [5d75121][h-ui], 2026-09-07       | 상세 모달 확장·센서 분석 UI                                                                                                                                                         |
| 이상 구간 기록·팝업 유지              | [16d9228][h-history], 2026-09-07  | `startAnomalyRecord`·`appendAnomalyRecord`·`finishAnomalyRecord`·`clearAnomalyRecord`. 정상 복귀 시 기록 종료, 닫기 전까지 데이터 유지                                              |

원문 문서의 계획 중 실제 개인 변경으로 확인하지 않은 항목은 완료 성과로 적지 않았다. SHAP을 물리적인 고장 원인 확정이나 잔여수명 예측으로 표현하지 않았다. Unity WebGL 구축, Kafka·Jenkins 전체 통합, LSTM 생성 모델 구축은 홍유나 개인 작업에 포함하지 않았다.

## CQC

- 확인한 저장소 HEAD: `1e6ff233794f7c4316026a354c01886a630ddd7c` (dev)
- [담당 WBS][c-wbs]: MO-01~MO-10 / MLOps·CI/CD — 홍유나
- [기술 스택·소유 범위 문서][c-role]: 서비스 통합·검사·배포·상태 확인·복구

| 페이지의 작업                    | 작성 커밋                                                 | 실제 변경·확인 범위                                                                                             |
| -------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Compose 핵심 5개 서비스 골격     | [2a41376][c-compose], 2026-09-17                          | `compose.yaml`, MLOps 스택·MO-02 문서                                                                           |
| healthcheck·기동 의존성          | [f5b0814][c-health], 2026-09-17                           | `compose.yaml`, `Jenkinsfile`                                                                                   |
| MySQL 볼륨·Credentials 환경 설정 | [fec48ea][c-volume], [6003339][c-credentials], 2026-09-21 | Compose·환경변수 예시·Jenkins Credentials 연결                                                                  |
| Backend·Inference 실제 연결      | [2ab054e][c-connect], 2026-09-23                          | Compose·Jenkinsfile·MO-04                                                                                       |
| 재현 가능한 HTTP 벤치마크        | [a1e44ac][c-benchmark], 2026-09-23                        | `scripts/benchmark_inference_http.py`, 측정 문서                                                                |
| CPU·HTTP 원자료 기록             | [4c6026d][c-measure], 2026-09-23                          | 모델 단독·Inference HTTP JSON 및 수용 기준 문서                                                                 |
| Compose 통합 HTTP 시험           | [96b4aa9][c-http], 2026-09-23                             | `Dockerfile.backend`, `compose.integration.yaml`, 통합 JSON                                                     |
| Simulator 배포 연동              | [0b6ec3e][c-simulator], [971edd1][c-autoplay], 2026-09-30 | Simulator Dockerfile·Compose·Jenkinsfile·자동 재생 설정·검증                                                    |
| 자동 검사·배포 실패 복구         | [17490ab][c-deploy], 2026-10-02                           | `Jenkinsfile`, `scripts/ci/compose-deploy.sh`, `compose-rollback.sh`, snapshot·health 검증 스크립트·배포 테스트 |
| 빌드 전 이미지 보존·롤백 개선    | [2d8cd17][c-preserve], 2026-10-02                         | 이미지 보존 스크립트·snapshot·롤백·테스트                                                                       |
| dev 배포 조건·PR 검사            | [0ebee87][c-dev], 2026-10-06                              | Jenkinsfile·PR checks·배포 기준 문서                                                                            |
| 서버 로그 순환·한도              | [d636793][c-log], 2026-10-02                              | Compose·서비스 logging 설정·시험                                                                                |
| 수용시험 자동화                  | [1f52180][c-acceptance], 2026-10-06                       | `run_mo09_acceptance.py`, E2 장애 스크립트·격리 Compose·MO-09·예비 증거                                         |
| QA 재검증·복구·배포 출처 대조    | [6dd8853][c-qa], [b28e4a2][c-provenance], 2026-10-07      | 실행 결과·증거 JSON·회차별 시각 대조·재시작·복구 스크립트·QA 문서                                               |

### 수치와 판정의 범위

- [MO-06 결과][c-cpu-doc]: 고정 합성 JPEG 12장·warmup 10회·100회 반복. Backend→Inference Compose HTTP p95 **205.76ms**는 합성 입력 기준선이며 실제 사과 사진의 운영 처리량이나 모델 정확도 근거가 아니다. 페이지에는 측정 업무·조건을 중심으로 소개했다.
- [MO-09 자동화][c-qa-doc]: JSON 자동 검사 `status`와 QA 기록표 `record_status`를 구분. 부분 검사·자동 회귀·합의 전 제안 기준은 관찰 통과여도 최종 수용 통과로 확대하지 않음.
- [2026-10-07 QA 보고][c-results]: **담당 QA 9건**은 해당 실행 회차 기대값 충족. 전체 수용 판정은 공동 확인 필요. 정상 관찰 **100건**, **0.501건/초**, 이전 2건/초 목표 미달. 이전 QA-SIM-02 실패·변동 원인 미확정 유지.
- 같은 보고의 배포 출처 대조: 현재 4개 서비스의 이미지와 Jenkins #115의 manifest list digest **4/4** 일치. 이미지 config digest와 manifest list digest를 혼동하지 않음. 과거 E2 이미지까지 검증했다고 확대하지 않음.
- [안전 배포 문서][c-safe-doc]: 이미지·실행 설정 복구이며 무중단 배포가 아님. DB·migration 롤백 제외, 첫 배포에 이전 버전이 없으면 복구 불가. 에이전트 강제 종료 직후 자동 복구는 보장하지 않음.

CQC 모델 학습·품질 관제 UI·물류 UI·전체 백엔드 구현은 개인 작업으로 기재하지 않았다. 다른 담당자가 만든 모델과 서비스를 연결·측정·검증한 범위를 소개한다.

## 디자인·화면 출처

참고 저장소 [yuudong123/portpolio-page](https://github.com/yuudong123/portpolio-page)의 큰 프로젝트 제목·밝은 배경·번호·상세 설명 배치를 참고해 새 HTML/CSS를 작성했다. 확인한 참고 저장소 HEAD는 `7b633566e7ddf663dd589ce16e44af40f4781655`다. 관련 없는 임시 시연 영상은 사용하지 않았다.

HydroTwin 화면 2장은 참고 저장소의 [대시보드 원본](https://github.com/yuudong123/portpolio-page/blob/7b633566e7ddf663dd589ce16e44af40f4781655/assets/hydrotwin-dashboard.png), [이상 상세 원본](https://github.com/yuudong123/portpolio-page/blob/7b633566e7ddf663dd589ce16e44af40f4781655/assets/hydrotwin-anomaly-detail.png)에서 가져온 팀 실행 화면이다. 파일의 원본 내용은 그대로 보존한다. 화면 전체를 개인 단독 구현으로 제시하지 않으며, 홍유나의 기여는 위 UI 커밋으로 한정한다. CQC 배포 흐름 그림은 검증된 동작을 정리한 새 구성 개념도이며 실시간 관제 화면이나 실행 로그를 가장하지 않는다.

[h-role]: https://github.com/yuudong123/ai-first-project/blob/09c495e0767aa615e5e6bd1f155bf65c41f7ded2/docs/team-task-board.md
[h-eda]: https://github.com/yuudong123/ai-first-project/commit/181d2dce99bcbd985b5a35e81f4c45b34191be2f
[h-train]: https://github.com/yuudong123/ai-first-project/commit/46d649bcdf164708e60e5c342f0b5f31238c2d12
[h-shap]: https://github.com/yuudong123/ai-first-project/commit/b8e4c12d9aa4d9ca1bbb011b7d1a13f4909b7458
[h-pipeline]: https://github.com/yuudong123/ai-first-project/commit/25f6e1d8a8f33ffb09dad427a94673acda0a24da
[h-rf]: https://github.com/yuudong123/ai-first-project/commit/aec208628e129210aa7d4342b68c2821a867f057
[h-layout]: https://github.com/yuudong123/ai-first-project/commit/f11ebc06d743ba4f9ab40a5ceb3877fb5c7b4f71
[h-sidebar]: https://github.com/yuudong123/ai-first-project/commit/6ffee3a6e5fa8038eb2e272cd6be30a99af228e7
[h-popup]: https://github.com/yuudong123/ai-first-project/commit/703b2b68c3f721b2a015afb3dfaab5ec13ea2561
[h-ui]: https://github.com/yuudong123/ai-first-project/commit/5d751219721682462b28875de400d841017a1ec9
[h-history]: https://github.com/yuudong123/ai-first-project/commit/16d922802879a32ac0a2a493d7fad917234c7580
[c-wbs]: https://github.com/yuudong123/CQC/blob/1e6ff233794f7c4316026a354c01886a630ddd7c/docs/wbs/WBS.md
[c-role]: https://github.com/yuudong123/CQC/blob/1e6ff233794f7c4316026a354c01886a630ddd7c/docs/wbs/reference/MO/mlops-stack.md
[c-compose]: https://github.com/yuudong123/CQC/commit/2a41376ff044f21890515fc8bdef8643c4f9cc47
[c-health]: https://github.com/yuudong123/CQC/commit/f5b0814239c6d3e887f7b2c192cc3236f690b994
[c-volume]: https://github.com/yuudong123/CQC/commit/fec48ea319acae85a3236962a77df2fae246f7c3
[c-credentials]: https://github.com/yuudong123/CQC/commit/600333939606cc1519f877e6b98eae2b82eeff0a
[c-connect]: https://github.com/yuudong123/CQC/commit/2ab054ed4fb84fcd4b5b9aa92faa8649df77d62d
[c-benchmark]: https://github.com/yuudong123/CQC/commit/a1e44ac6684b13c455e3fca37a2cc7782e69fa4c
[c-measure]: https://github.com/yuudong123/CQC/commit/4c6026d9140cf752232ce9d515ce0770d3d1ea34
[c-http]: https://github.com/yuudong123/CQC/commit/96b4aa9d3660495a87b3da614f5a00a034a860e4
[c-simulator]: https://github.com/yuudong123/CQC/commit/0b6ec3e89465ec97b6ceb744f5dbebfb292abd27
[c-autoplay]: https://github.com/yuudong123/CQC/commit/971edd133700f4dc3683fb603eddbe32c1100397
[c-deploy]: https://github.com/yuudong123/CQC/commit/17490ab25c4778bc425aa83c42b6e125c307449c
[c-preserve]: https://github.com/yuudong123/CQC/commit/2d8cd172ab3918a34c8c300cea76b7c46c771454
[c-dev]: https://github.com/yuudong123/CQC/commit/0ebee874ec5b4e379434d337ffce63a72f74bc22
[c-log]: https://github.com/yuudong123/CQC/commit/d6367935121e79b0fac27b18284a347200356534
[c-acceptance]: https://github.com/yuudong123/CQC/commit/1f521804e458f2e806aca2eb45fe48303f032f18
[c-qa]: https://github.com/yuudong123/CQC/commit/6dd8853d41791d0491317a57f88e766b692238ac
[c-provenance]: https://github.com/yuudong123/CQC/commit/b28e4a282ad90f45efc5191d0aa544e7b6ec226a
[c-cpu-doc]: https://github.com/yuudong123/CQC/blob/1e6ff233794f7c4316026a354c01886a630ddd7c/docs/wbs/MO-06.md
[c-qa-doc]: https://github.com/yuudong123/CQC/blob/1e6ff233794f7c4316026a354c01886a630ddd7c/docs/wbs/MO-09.md
[c-results]: https://github.com/yuudong123/CQC/blob/1e6ff233794f7c4316026a354c01886a630ddd7c/docs/wbs/results/qa-mo-20261007.md
[c-safe-doc]: https://github.com/yuudong123/CQC/blob/1e6ff233794f7c4316026a354c01886a630ddd7c/docs/wbs/reference/MO/jenkins-safe-deployment.md
