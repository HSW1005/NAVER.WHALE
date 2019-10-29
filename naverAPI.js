//코드 참고사이트: https://blog.naver.com/rnjsrldnd123/221496605706

const request = require('request')
const NAVER_CLIENT_ID     = 'aSPXvB_sBj3jdLvy9XLp'
const NAVER_CLIENT_SECRET = 'z9ghCm9Jiy'
const option = {
  query  : '속보', //검색어 
  start : 1,
  display : 50,
  sort : 'date' //최신순으로 정렬 
}

//API를 호출하는 함수 
let callAPI = function() {
    request.get({
        uri:'https://openapi.naver.com/v1/search/news?query=', 
        qs :option,
        headers:{
          'X-Naver-Client-Id':NAVER_CLIENT_ID,
          'X-Naver-Client-Secret':NAVER_CLIENT_SECRET
        }
      }, function(err, res, body) {
        let json = JSON.parse(body) //json으로 파싱
        console.log(json)
      })
};

//5초 간격으로 함수를 실행하여 새로고침 
setInterval(callAPI, 5000); 