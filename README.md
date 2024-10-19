<!-- @format -->

# Vite

- dist 분류하기
- src 만들기
- favicon 은 public 내 중첩 폴더 안에서 읽지 못하고, svg+xml 적용 안됨,
- favicon size 는 상관 없는 듯
- favicon type=x-icon, 물음표를 붙여야 작동된다.
- html 에서 경로는 앞에 `/` 붙지 않는다.
- css 에 scss import 못 읽는다.
- config 은 vanilla 는 export default 만 가능하다.

---

- js 에서 svg, css import 불가능?
- import 가 하나 밖에 안 된다. 이유는?
- js 폴더에서 벗어나면 파일을 읽지 못한다. js 파일은 js 폴더 안에만 있어야 하는가 path 경로 설정이 자유롭지 못하다.

---

- [ ] build 할 때 dist 에 컴파일 된 css 를 import 할 '이름 가진 css 파일'로 복사하기
