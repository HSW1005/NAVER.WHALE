//코드 참고사이트: https://blog.naver.com/rnjsrldnd123/221496605706

const request = require('request')
const NAVER_CLIENT_ID     = 'aSPXvB_sBj3jdLvy9XLp'
const NAVER_CLIENT_SECRET = 'z9ghCm9Jiy'
const option = {
  query  : '속보', //검색어 
  start : 1,
  display : 100,
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

          var titleArray = new Array();
          var linkArray = new Array(); 

          var politics = {title : [], link : []}; //100 
          var economy = {title : [], link : []}; //101
          var society = {title : [], link : []}; //102
          var culture = {title : [], link : []}; //103
          var world = {title : [], link : []}; //104
          var it = {title : [], link : []}; //105

          for(let i = 0; i < 100; i++) {
            
            //전체 속보 기사제목이랑 링크를 각각 배열에 저장 
            titleArray.push(json.items[i].title);
            linkArray.push(json.items[i].link); 

          }

          for(let i = 0; i < 100; i++) {

            if(linkArray[i].search("=100&") == 58) {
        
              politics.title.push(titleArray[i]);
              politics.link.push(linkArray[i]);
        
            } else if(linkArray[i].search("=101&") == 58) {
              
              economy.title.push(titleArray[i]);
              economy.link.push(linkArray[i]);
              
            } else if(linkArray[i].search("=102&") == 58) {
              
              society.title.push(titleArray[i]);
              society.link.push(linkArray[i]);
              
            } else if(linkArray[i].search("=103&") == 58) {
              
              culture.title.push(titleArray[i]);
              culture.link.push(linkArray[i]);
              
            } else if(linkArray[i].search("=104&") == 58) {
              
              world.title.push(titleArray[i]);
              world.link.push(linkArray[i]);
              
            } else if(linkArray[i].search("=105&") == 58) {
              
              it.title.push(titleArray[i]);
              it.link.push(linkArray[i]);
              
            } else {
              //do nothing
            }

          }

          //각 카테고리별 결과를 하나의 객체에 저장한다
          var obj = {politics:politics, economy:economy, society:society, culture:culture, world:world, it:it}; 
          var result = JSON.stringify(obj); 

          //fs를 사용하여 객체를 newslist.js에 write한다 
          const fs = require('fs');

          fs.writeFile("newslist.js", result, function(err) {
            if(err) {
              return console.log(err);
            }     
            console.log("파일에 저장됨"); 
            });
          

          }) 

};

callAPI(); 

//5초 간격으로 함수를 실행하여 새로고침 
setInterval(callAPI, 5000); 