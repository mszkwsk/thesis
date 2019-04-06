import React from 'react'

const Comments = (comments) =>
  <div>
    {comments.length ?
    comments.map(comment =>
      <div>
        {comment.author}
        <section>{comment.comment}</section>
      </div>
    ) : 'Nie ma żadnych komentarzy'}
  </div>

export default Comments