# 概要
- Node.js ：Express.js でwebサーバ

# 準備
- 必要libraryのインストール（※ package.json 参照）
    1.  > npm run setup

# 実行 1 (GET sample)
> node index-get.js

## 確認
- http://localhost:3000
- > curl -X GET http://localhost:3000/

# 実行 2 (POST sample)
> node index-post.js

## 確認
- > curl -X POST http://localhost:3001/ -H "Content-type: application/json" -d '{ "pet" : "cat" }'


***
***
***

# 実装
## 使用技術
- node
- > node --version
  - > v16.17.0

- npm
  - > npm --version
    - > 8.18.0

## 使用ライブラリ
* Express.js

# 手順
1. > npm init -y
1. > npm install express --save
