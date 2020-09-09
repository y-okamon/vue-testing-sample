# vue-testing-sample
Vue.js + Vue Test Utils + Jest のサンプルコードです。

## 環境
- Vue 2.6.11
- Vue Cli 4.5.4

## テスト用プロジェクトの作成
以下のコマンドを入力してテスト用のプロジェクトを作成する。
```
vue create vue-testing-sample
```

Unit Testingにチェックをつけ忘れないようにする。
```
Vue CLI v4.5.4
? Please pick a preset: Manually select features
? Check the features needed for your project:
 (*) Choose Vue version
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 ( ) Router
 ( ) Vuex
 ( ) CSS Pre-processors
>(*) Linter / Formatter
 (*) Unit Testing
 ( ) E2E Testing
```

最終的な選択値は以下の通り。  
Pick a unit testing solution では `Jest` を選択すること。
```
Vue CLI v4.5.4
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Linter, Unit
? Choose a version of Vue.js that you want to start the project with 2.x
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? (y/N) N
```

## 動作確認
アプリが起動するかどうかを確認してみる。
```
cd vue-testing-sample
npm run serve
```

以下のようなメッセージが表示されたらブラウザでアクセスして確認する。
```
  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.xxx.xxx:8080/
```

## App.vueファイルを書き換える
既存の`APP.vue`ファイルを書き換える。  
既に記述されているコードは全て削除して、新たに以下を記述する。
```javascript
<template>
  <div id="app">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      msg: 'Hello'
    }
  }
}
</script>

<style scoped>
</style>
```

## テストコードの記述
`App.vue`と同一階層に`__tests__`ディレクトリを作成する。  
※Jestで[推奨されるディレクトリ構造](https://vue-test-utils.vuejs.org/ja/guides/#%E3%83%86%E3%82%B9%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E9%85%8D%E7%BD%AE)となります。

```
mkdir __tests__
```

`App.test.js`ファイルを作成し、以下のコードを記述する。  
Jestのデフォルト設定では、プロジェクト内の`.spec.js`もしくは`.test.js`ファイルがテスト対象となる。

```javascript
import App from '@/App.vue'
import { mount } from '@vue/test-utils'

describe('Testing App component', () => {
  it('checks textcontent to Hello', () => {
    const wrapper = mount(App)
    expect(wrapper.element.textContent).toBe('Hello')
  })
})
```

## テストを実行する
以下のコマンドを入力してテストを実行する。
```
npm run unit:test
```

しばらく待つとテストが実行されて、以下のような表示がされる。
```
 PASS  src/__tests__/App.test.js
  Testing App component
    √ checks textcontent to Hello (23ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.51s
```

## Watchモード
`.vue`ファイルもしくは`テストコード`を更新した際に、その更新を検知して自動的にテストを再実行してくれる`Watchモード`が準備されている。  
これにより、再度、テスト実行コマンドを発行する手間を省くことができる。  
まずは、`package.json`を書き換える。
```
"test:unit": "vue-cli-service test:unit --watch"
```

あとは、今まで同様にテストを実行できる。
```
npm run unit:test
```

自動的なテスト再実行の他にも色々できる。
```
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```
