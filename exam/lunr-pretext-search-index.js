var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "exam-1d",
  "level": "1",
  "url": "#exam-1d",
  "type": "Article",
  "number": "",
  "title": "Linear Algebra Sample Exam 1D",
  "body": "Linear Algebra Sample Exam 1D   Linear Algebra Sample Exam 1D   Work done on scratch paper will not be graded. You don't need to show your work on pages 1 and 2.  (5 points) Indicate whether the situations are possible or impossible .   possible impossible  a) is a matrix with pivots in every column, is not in the span of the columns of .  b) is a matrix that has 4 pivotal columns, and the columns of are linearly dependent.  c) Vector is in , every row of the matrix contains a pivot, and the linear system has an infinite number of solutions for some .  d) is an onto linear transform and has non-trivial solutions.  e) is a linear transform, is a vector in , is a matrix with exactly one pivot, and the only vector in the range of the transform is the zero vector.   (7 points) Indicate true if the statement is true, otherwise, indicate false .   true false  a) If and are the standard vectors in , and is a matrix transform that satisfies , then every entry of is equal to 1.  b) If is , and are vectors in , , and , then cannot be onto.  c) If is consistent, then every column of must be pivotal.  d) If the only solution to the linear system is the trivial solution, the columns of must be linearly independent.  e) Matrix is , and has a solution for all . The columns of span .  f) If the linear system is consistent, then the augmented matrix does not have a pivot in the last column.  g) Suppose and are matrices, and . If and is row equivalent to , then .    "
},
{
  "id": "exam-1d-q1",
  "level": "2",
  "url": "#exam-1d-q1",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "",
  "body": "(5 points) Indicate whether the situations are possible or impossible .   possible impossible  a) is a matrix with pivots in every column, is not in the span of the columns of .  b) is a matrix that has 4 pivotal columns, and the columns of are linearly dependent.  c) Vector is in , every row of the matrix contains a pivot, and the linear system has an infinite number of solutions for some .  d) is an onto linear transform and has non-trivial solutions.  e) is a linear transform, is a vector in , is a matrix with exactly one pivot, and the only vector in the range of the transform is the zero vector.  "
},
{
  "id": "exam-1d-q2",
  "level": "2",
  "url": "#exam-1d-q2",
  "type": "Worksheet Exercise",
  "number": "1.2",
  "title": "",
  "body": "(7 points) Indicate true if the statement is true, otherwise, indicate false .   true false  a) If and are the standard vectors in , and is a matrix transform that satisfies , then every entry of is equal to 1.  b) If is , and are vectors in , , and , then cannot be onto.  c) If is consistent, then every column of must be pivotal.  d) If the only solution to the linear system is the trivial solution, the columns of must be linearly independent.  e) Matrix is , and has a solution for all . The columns of span .  f) If the linear system is consistent, then the augmented matrix does not have a pivot in the last column.  g) Suppose and are matrices, and . If and is row equivalent to , then .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
