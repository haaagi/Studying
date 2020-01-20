import axios from 'axios';
// title을 가져오도록 서버에 요청하는 api
export function getTitle(id) {
    return axios.get('http://localhost:5000/posts/title/' + id);
}

// content를 가져오도록 서버에 요청하는 api
export function getContent(id) {
    return axios.get('http://localhost:5000/posts/content/' + id);

}

