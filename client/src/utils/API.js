import axios from "axios";

let APIKey = "ftmd8u8n5ppzdw9ghpodld";
let limit = 25;

export default { 
    getMarket: function() {
        return axios.get(`https://api.lunarcrush.com/v2?data=market&key=${APIKey}&type=fast&desc=true&sort=mc&limit=${limit}`);
    }, 
    createPost: function(postData){
        //axios.post("post endpoint", postData);
    },
    getAllPosts: function(){
        //axios.get("get all endpoint")
    },
    getPostById: function(id){
        //axios.get("get single post endpoint" + id);
    }
}