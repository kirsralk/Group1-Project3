import axios from "axios";

let APIKey = process.env.REACT_APP_API_KEY;
console.log(process.env);
let limit = 25;

export default { 
    getMarket: function() {
        return axios.get(`https://api.lunarcrush.com/v2?data=market&key=${APIKey}&type=fast&desc=true&sort=mc&limit=${limit}`);
    }, 
    createPost: function(postData){
        return axios.post("/api/posts", postData);
    },
    createReply: function(id, postData){
        return axios.post("/api/posts/" + id, postData);
    },
    getAllPosts: function(){
       return axios.get("/api/posts")
    },
    getPostById: function(id){
        return axios.get("api/posts/" + id);
    }
}