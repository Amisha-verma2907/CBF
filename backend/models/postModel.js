import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter a post name"]
    },
    userId: { 
        type: String,
         ref: 'User', 
         required: true 
        },

    username: { 
        type: String, 
        required: true
     },

    category:{
        type:String,
        enum:['certifications', 'labs', 'devices', 'mentorships', 'jobs', 'internships', 'others'],
        required: true 
    },

    content:{
        type:String,
        required:[true,"Please enter a content"]
    },
    
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],

    createdAt:{
        type:Date,
        default:Date.now
    }
    
})

const Post = mongoose.model('Post', postSchema);

export default Post;