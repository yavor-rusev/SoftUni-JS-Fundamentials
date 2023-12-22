function comments(input) {
    let usersList = [];
    let articleList = [];

    let articlesObj = {};

    for (let command of input) {
        if (command.includes("user ")) {
            let newUser = command.replace("user ", "");

            if (!usersList.includes(newUser)) {
                usersList.push(newUser);
            }

        } else if (command.includes("article ")) {
            let newArticle = command.replace("article ", "");

            if (!articleList.includes(newArticle)) {
                articleList.push(newArticle);
            }

        } else if (command.includes(": ")) {
            let [currentUser, currentArticle] = command.split(": ")[0].split(" posts on ");

            if (usersList.includes(currentUser) && articleList.includes(currentArticle)) {
                let [commentTitle, commentContent] = command.split(": ")[1].split(", ");

                if (!articlesObj.hasOwnProperty(currentArticle)) {
                    articlesObj[currentArticle] = {};
                }

                if (!articlesObj[currentArticle].hasOwnProperty(currentUser)) {
                    articlesObj[currentArticle][currentUser] = [];
                }

                articlesObj[currentArticle][currentUser].push([commentTitle, commentContent]);
            }
        }
    }

    let articlesMatrix = Object.entries(articlesObj);

    for (let currentArticleInfo of articlesMatrix) {

        let [currentArticleName, usersOfArticleObj] = currentArticleInfo;
        let currentArticleCommentsCount = 0;

        let usersOfArticleAsMatrix = Object.entries(usersOfArticleObj);
        let usersSorted = usersOfArticleAsMatrix.sort((userA, userB) => userA[0].localeCompare(userB[0]));
        currentArticleInfo.splice(1, 1, usersSorted);

        for (let currentUserDouble of usersSorted) {

            let [currentUserName, commentsOfUserAsMatrix] = currentUserDouble;
            currentArticleCommentsCount += commentsOfUserAsMatrix.length;
        }

        currentArticleInfo.push(["commentsCount", currentArticleCommentsCount]);
    }

    let sortedArticals = articlesMatrix.sort((articleA, articleB) => articleB[2][1] - articleA[2][1]);

    sortedArticals.forEach(currenArticleInfo => {

        let articalName = currenArticleInfo[0];
        console.log(`Comments on ${articalName}`);

        let articleUsers = currenArticleInfo[1];
        articleUsers.forEach(currentUserInfo => {

            let currentUsername = currentUserInfo[0];

            let currentUserComments = currentUserInfo[1];
            currentUserComments.forEach(currentCommentInfo => {

                let currentCommentTitle = currentCommentInfo[0];
                let currentCommentContent = currentCommentInfo[1];

                console.log(`--- From user ${currentUsername}: ${currentCommentTitle} - ${currentCommentContent}`);
            })
        })
    })
}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);

