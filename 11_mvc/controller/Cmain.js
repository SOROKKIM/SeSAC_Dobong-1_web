const Comment = require("../model/Comment"); //commentsInfo()
/*
 * controller에서는 model에서 받은 데이터를 가공해서 view에 전달할 수 있어요!
 */

//localhost:8080/

//GET / 라우팅 주소
exports.main = (req, res) => {
  res.render("index");
};

//get / comments
exports.comments = (req, res) => {
  console.log(Comment.commentsInfo());
  res.render("comments.ejs", { commentInfo: Comment.commentsInfo() });
};

//get /comment / :id (params 사용) >> comment.ejs 렌더
exports.comment = (req, res) => {
  console.log(req.params);
  const commentId = req.params.id; //1,2,3,4 로 들어옴

  // if (commentId < 1 || commentId > comments.length) {
  //   return res.render("404");
  // }

  // if (isNaN(commentId)) {
  //   return res.render("404");
  // }

  //한번에 처리!
  if (!Comment.commentsInfo()[commentId - 1]) return res.render("404");
  res.render("comment.ejs", {
    commentInfo: Comment.commentsInfo()[commentId - 1],
  });
};
//Comment.commentsInfo() [{}, {}, {}, {}] 이런 형식으로 나옴
