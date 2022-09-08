# 概要
- Node.js ：Express.js でwebサーバ

# 使用技術
- node
  > node --version

  > v16.17.0

- npm
  > npm --version

  > 8.18.0

## 使用ライブラリ
* Express.js

# 手順
1. npm初期化
    - > npm init -y
1. express install
    - > npm install express --save


# 実行 1
> node index.js

## 結果確認
- ブラウザで　http://localhost:3000

- > curl -X GET http://localhost:3000/

# 実行 2
> node index-post.js

## 結果確認

- > curl -X POST http://localhost:3001/ -H "Content-type: application/json" -d '{ "pet" : "cat" }'

