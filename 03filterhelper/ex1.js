let post = {id: 4, title: 'New Post'};
let comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'it was ok'},
    {postId: 4, content: 'neat'},
];

let commentedPosts = function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
       return comment.postId === post.id;
    });
}

console.log(commentedPosts(post, comments));