# NomaderCoder Class

_Learning Typescript by making a Blockchain with it!_

[TypeChain](https://nomadcoders.co/typescript-for-beginners/lectures/1717)

## 타입스크립트를 이용하는 이유

- 자바스크립트에 없는 규칙을 갖고 있다. 이 규칙은 오류를 줄여준다.

## 타입 스크립트 시작 전

- git init
- git remote add origin (주소)
- create README.md
- yarn init
- `"scripts": { "start": "node index.js", "prestart": "tsc" }`를 `package.json`에 추가 (`yarn start` 를 하면 컴파일하고 터미널에 보여준다.)
- create `tsconfig.json` file

```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true
  },
  "include": ["index.ts"],
  "exclude": ["node_modules"]
}
// Add tsconfig.json file
```
