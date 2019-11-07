import {
  IGetPageAction,
  IPost
} from './App.types';

import {adress, httpGet, httpPost} from './components/httpGet';

interface IAppState {
  setPage: number,
  data: IPost[]
}

type IAppActions =
    IGetPageAction;

const initialState = {
  setPage: 0,
  data:[{
      "popularity": 0.0,
      "vote_count": 0,
      "video": false,
      "poster_path": "NoPoster",
      "id": 0,
      "adult": false,
      "backdrop_path": "NoBackDrop",
      "original_language": "noLanguage",
      "original_title": "NoOrigTitle",
      "genre_ids": [0,0,0],
      "title": "NoTitle",
      "vote_average": 0.0,
      "overview": "NoOverview",
      "release_date": "0000-00-00"
    }]
  };


const getData = (page:number)=>{
  var buf:any=[];
  httpGet('https://api.themoviedb.org/3/discover/movie?api_key=e8ae59d95e445da13e5a518624ac0972&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+page)
    .then(
      (response: string) => {
        const JSONResponse:JSON = JSON.parse(response);
        return JSONResponse;
      },
      error => alert(`Rejected: ${error}`)
    )
    .then(
      (JSONResponse:any)=>{
        var array: Array<IPost> = [];
        array = JSONResponse;
        return array;
    })
    .then(
      (array:any)=>{
        array.results.map((film)=>{
          buf.push(film)
        })
      }
    )
    .catch(function(err){
      console.error(err);
    });
    return buf;
}


const reducer = (state: IAppState, action: IAppActions) => {
  switch (action.type) {
    case 'GET_PAGE':{
      const page = action.setPage;
      const result = getData(page);
      return{
        ...state,
        data: result
      }
      }
      
    
    /*case 'let_login':{

      var formData = 'login='+encodeURIComponent(state.bufLogin)
      +"&email="+encodeURIComponent(state.bufEmail)
      +"&pass="+encodeURIComponent(state.bufPass);
      httpPost(adress+"login.php", formData)
      .then((response: any) => {
          const data = JSON.parse(response);
          return data;
        },
        error => alert(`Rejected: ${error}`)
      )
      .then((data: any) => {
        if(data =="No Results Found."){
          alert("No such user found")
        }else{
          data.map((item:{idUsers:string, username:string})=>{
            const { idUsers, username} = item;
            console.log("I've catch this: "+ username);
            sessionStorage.setItem('login', username);
            sessionStorage.setItem('idUser', idUsers);
            return{
              ...state,
              login: username,
              idUser: parseInt(idUsers)
            }
          })
        }
      })
      .catch(function(err){
        console.error(err);
      });
    }
   case 'RESET': {
      return {
        chipsList: [],
        filteredData: action.inputData,
        inputData: action.inputData,
        text: '',
        visible: false
      };
    }*/
    default: {
      return state;
    }
  }
};

export { initialState, reducer };
