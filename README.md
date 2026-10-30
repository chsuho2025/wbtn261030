# wbtn261030

네이버웹툰 AI Animator 지원용 포트폴리오 템플릿입니다.
기존 포트폴리오의 카드 모션과 상세창을 유지하고, 시작 로고 모션과 세 프로젝트의 실제 내용을 비웠습니다.

## 내용 채우기

`assets/js/data.js`의 `projects` 배열에 프로젝트 세 개가 있습니다.

- `title`, `subtitle`: 제목과 부제
- `summary`, `competency`, `tags`: 목록 카드의 설명과 역량
- `card.src`: 카드 이미지 경로
- `resume`: 프로젝트 개요와 담당 역할
- `outcome.body`, `outcome.media`: 결과물 설명과 이미지·영상·오디오
- `sections`: 상세 제작 과정

빈 문자열과 빈 배열은 실제 내용이 없는 상태입니다. `assets/media/placeholder.svg`는 빈 카드용 중립 이미지이며, 실제 작업물로 교체하면 됩니다.

`slug`는 상세페이지 주소와 연결됩니다. 변경할 경우 `projects/` 안 HTML의 파일명과 `data-project` 값도 함께 변경하세요.

## 구조

```text
index.html
projects/project-01.html
projects/project-02.html
projects/project-03.html
assets/js/data.js
assets/js/app.js
assets/js/wave-gallery.js
assets/js/glass-controls.js
assets/css/style.css
assets/media/placeholder.svg
vercel.json
```

## 실행과 배포

별도 빌드 과정이 없는 정적 HTML·CSS·JS 사이트입니다.

```sh
python3 -m http.server 8000
```

Vercel은 저장소 루트를 사용하며 Framework Preset은 Other, 별도 Build Command와 Output Directory는 필요하지 않습니다. GitHub 기본 브랜치 업데이트를 통해 연결된 Vercel 프로젝트에서 자동 배포됩니다.
