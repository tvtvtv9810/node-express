const express = require('express')

// expressのインスタンス化
const app = express()

// 3000番ポートでサーバーを待ちの状態にする。
app.listen(3000, () => {
  console.log("サーバー起動中...");
});

// GETリクエストの設定
app.get('/', (req, res)=> {
    res.json({ "pet": "dog"});
    console.log('GETリクエストを受け取りました')
    res.end();
})
