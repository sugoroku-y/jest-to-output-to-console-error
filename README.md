# @sugoroku-y/jest-to-output-to-console-error

The custom matcher to check output to `console.error`.

`console.error`に出力された内容を確認するカスタムマッチャー。

[![JEST](https://img.shields.io/badge/-JEST-404040.svg?logo=JEST)](https://jestjs.io/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-404040.svg?logo=TypeScript)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/-JavaScript-404040.svg?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Packages](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fsugoroku-y%2Fjest-to-output-to-console-error%2Fmain%2Fpackage.json&query=%24.version&prefix=v&logo=GitHub&label=GitHub%20Packages&link=https%3A%2F%2Fimg.shields.io%2Fbadge%2Flicense-MIT-blue.svg%3Fstyle%3Dflat)](https://github.com/sugoroku-y/jest-to-output-to-console-error/pkgs/npm/jest-to-output-to-console-error)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](./LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/sugoroku-y/jest-to-output-to-console-error/badge.svg)](https://coveralls.io/github/sugoroku-y/jest-to-output-to-console-error)
[![Publish package to GitHub Packages](https://github.com/sugoroku-y/jest-to-output-to-console-error/actions/workflows/publish.yml/badge.svg)](https://github.com/sugoroku-y/jest-to-output-to-console-error/actions/workflows/publish.yml)
[![Push Coverage to Coveralls](https://github.com/sugoroku-y/jest-to-output-to-console-error/actions/workflows/coverage.yml/badge.svg)](https://github.com/sugoroku-y/jest-to-output-to-console-error/actions/workflows/coverage.yml)

## Install(インストール)

以下のコマンドを実行してください。

```bash
npm install --save-dev sugoroku-y/jest-runner-prettier
```

## Usage

テスト用のソースファイルの先頭で`'@sugoroku-y/jest-to-output-to-console-error'`を`import`してください。

```ts
import `@sugoroku-y/jest-to-output-to-console-error`;
```

こうすることでテストケースで`expect(～).toOutputToConsoleError`が使用できるようになります。

```ts
expect(() => {
    console.error('console.error message');
}).toOutputToConsoleError(['console.error message']);
```

## License

Copyright YEBISUYA Sugoroku 2024. Licensed MIT.
