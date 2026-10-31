var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for course name (MATH xxx, section xxx) for [term] 20xx. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "activities-3",
  "level": "1",
  "url": "activities-3.html",
  "type": "Worksheet",
  "number": "",
  "title": "24 Quadratic Forms (LN 2.2, 2.3)",
  "body": " 24 Quadratic Forms (LN 2.2, 2.3)       Poll Question   True or false: for all values of and .   Hint: plot it in Desmos 3D! And: how does this exercise relate to symmetric matrices?             A quadratic form is a function , given by   Matrix is and symmetric, and is a variable vector in .    Example: express in the form .            If is a symmetric matrix then there exists an orthogonal change of variable that transforms to with no cross-product terms.     Proof in the lecture videos\/textbook.      Consider: where .    Make a change of variable that transforms the quadratic form into another quadratic form that has no cross-product terms.    For what values of will satisfy for any and ?     Tip: it may help to plot the surfaces in Desmos 3D to see what the surface looks like as you change the value of .           Our goal: solve optimization problems with quadratic functions.   Take for example the surface:   If we set to be constant, , we obtain the equation of a circle whose radius is .      The surface above has a unique minimum at the origin. What about other surfaces?    A quadratic form is     positive definite if for all .     negative definite if for all .     positive semidefinite if for all .     negative semidefinite if for all .     indefinite if takes on positive and negative values for .        If is a symmetric matrix with eigenvalues , then is     positive definite when all eigenvalues are positive     negative definite when all eigenvalues are negative     indefinite when at least one eigenvalue is negative and at least one eigenvalue is positive              Assume . Construct the matrix of the quadratic form, and classify the quadratic form.    "
},
{
  "id": "activities-3-3-2",
  "level": "2",
  "url": "activities-3.html#activities-3-3-2",
  "type": "Definition",
  "number": "1",
  "title": "",
  "body": "  A quadratic form is a function , given by   Matrix is and symmetric, and is a variable vector in .   "
},
{
  "id": "activities-3-4-2",
  "level": "2",
  "url": "activities-3.html#activities-3-4-2",
  "type": "Theorem",
  "number": "2",
  "title": "",
  "body": "  If is a symmetric matrix then there exists an orthogonal change of variable that transforms to with no cross-product terms.   "
},
{
  "id": "activities-3-5-9",
  "level": "2",
  "url": "activities-3.html#activities-3-5-9",
  "type": "Definition",
  "number": "3",
  "title": "",
  "body": "  A quadratic form is     positive definite if for all .     negative definite if for all .     positive semidefinite if for all .     negative semidefinite if for all .     indefinite if takes on positive and negative values for .     "
},
{
  "id": "activities-3-5-10",
  "level": "2",
  "url": "activities-3.html#activities-3-5-10",
  "type": "Theorem",
  "number": "4",
  "title": "",
  "body": "  If is a symmetric matrix with eigenvalues , then is     positive definite when all eigenvalues are positive     negative definite when all eigenvalues are negative     indefinite when at least one eigenvalue is negative and at least one eigenvalue is positive     "
},
{
  "id": "sample-exam-1d",
  "level": "1",
  "url": "sample-exam-1d.html",
  "type": "Worksheet",
  "number": "",
  "title": "Linear Algebra Sample Exam 1D",
  "body": " Linear Algebra Sample Exam 1D   Work done on scratch paper will not be graded. You don't need to show your work on pages 1 and 2.  (5 points) Indicate whether the situations are possible or impossible .   possible impossible  a) is a matrix with pivots in every column, is not in the span of the columns of .  b) is a matrix that has 4 pivotal columns, and the columns of are linearly dependent.  c) Vector is in , every row of the matrix contains a pivot, and the linear system has an infinite number of solutions for some .  d) is an onto linear transform and has non-trivial solutions.  e) is a linear transform, is a vector in , is a matrix with exactly one pivot, and the only vector in the range of the transform is the zero vector.   (7 points) Indicate true if the statement is true, otherwise, indicate false .   true false  a) If and are the standard vectors in , and is a matrix transform that satisfies , then every entry of is equal to 1.  b) If is , and are vectors in , , and , then cannot be onto.  c) If is consistent, then every column of must be pivotal.  d) If the only solution to the linear system is the trivial solution, the columns of must be linearly independent.  e) Matrix is , and has a solution for all . The columns of span .  f) If the linear system is consistent, then the augmented matrix does not have a pivot in the last column.  g) Suppose and are matrices, and . If and is row equivalent to , then .   "
},
{
  "id": "exam-1d-q1",
  "level": "2",
  "url": "sample-exam-1d.html#exam-1d-q1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "(5 points) Indicate whether the situations are possible or impossible .   possible impossible  a) is a matrix with pivots in every column, is not in the span of the columns of .  b) is a matrix that has 4 pivotal columns, and the columns of are linearly dependent.  c) Vector is in , every row of the matrix contains a pivot, and the linear system has an infinite number of solutions for some .  d) is an onto linear transform and has non-trivial solutions.  e) is a linear transform, is a vector in , is a matrix with exactly one pivot, and the only vector in the range of the transform is the zero vector.  "
},
{
  "id": "exam-1d-q2",
  "level": "2",
  "url": "sample-exam-1d.html#exam-1d-q2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "(7 points) Indicate true if the statement is true, otherwise, indicate false .   true false  a) If and are the standard vectors in , and is a matrix transform that satisfies , then every entry of is equal to 1.  b) If is , and are vectors in , , and , then cannot be onto.  c) If is consistent, then every column of must be pivotal.  d) If the only solution to the linear system is the trivial solution, the columns of must be linearly independent.  e) Matrix is , and has a solution for all . The columns of span .  f) If the linear system is consistent, then the augmented matrix does not have a pivot in the last column.  g) Suppose and are matrices, and . If and is row equivalent to , then .  "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
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
