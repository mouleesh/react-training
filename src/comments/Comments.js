const commentsObj = [
    {
        commentId: 1,
        text: "This is first comment",
        comments: [{
            commentId: 2,
            text: "This is first comment of first comment"
        }]
    },
    {
        commentId: 3,
        text: "This is Second comment",
        comments: [{
            commentId: 4,
            text: "This is first comment of Second comment"
        }, {
            commentId: 5,
            text: "This is Second comment of Second comment",
            comments: [{
                commentId: 6,
                text: "This is first comment of Second comment of Second comment"
            }]
        }]
    }
]