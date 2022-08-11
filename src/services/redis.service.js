//const API = process.env.REACT_APP_API + process.env.REACT_APP_STUDENT_ROUTE;
const API = "https://t8rnuz-3000.sse.codesandbox.io/sendrequest";
//const AbstractAPI =
//"https://ipgeolocation.abstractapi.com/v1/?api_key=34b261dee8cd4ea7afbc43bd8d58ae20";
class RedisService {
  get() {
    return fetch(API, { method: "GET" })
      .then((response) => {
        if (response.status > 350) {
          throw new Error(response.status);
        } else {
          return response.json();
        }
      })
      .catch((error) => console.log(error));
  }

  post(data) {
    return fetch(API, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      headers: {
        "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data)
    })
      .then(this.successHandling)
      .catch(this.errorHandling);
  }

  errorHandling(error) {
    console.log(error);
  }

  successHandling(response) {
    if (response.status > 350) {
      throw new Error(response.status);
    } else {
      return response.json();
    }
  }
}

export default RedisService;
