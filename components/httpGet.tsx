
const adress = "http://10.15.0.9/dyploma/";

export {adress};

export function httpGet(url: string) {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
  
      xhr.onload = function() {
        if (this.status == 200) {
            console.log(this.response);
          resolve(this.response);
        } else {
          const error = new Error(this.statusText);
          reject(error);
        }
      };
      xhr.onerror = function() {
        reject(new Error('Network Error'));
      };
      xhr.send();
    });
  };

  export function httpPost(url: string, data: any) {
    return new Promise(function(resolve,reject){
      console.log("Connecting to: "+url);
      console.log("Sending next: "+ data);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url, false);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      var buf = 'NoName';
      xhr.onload = function (){
        if(xhr.readyState ===4){
          if(xhr.status >=200 && xhr.status < 400){
            resolve(xhr.response);
          }
          else{
            reject(new Error("POST error"));
          }
        }
      }
      xhr.send(data);
    });
  }