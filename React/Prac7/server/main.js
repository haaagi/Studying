import express from 'express';

const app = express();

let port = 3000;

// 경로 '/'로 들어오는 요청들은 public 폴더로 정적 라우팅 해준다

app.use('/', express.static(_dirname + '/../public'));

app.get('hello', (req, res) => {
    return res.send('Can you hear me?');
});

//라우트 예제
import posts from './routes/posts';
app.use('/posts', posts);

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});