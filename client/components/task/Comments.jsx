import React from 'react'

const Comments = ({comments}) =>
  <React.Fragment>
    {comments.length ?
    comments.map((comment, idx) =>
      <div
        key={idx}
        className='task-container-comment'
      >
        Autor: {comment.author}
        <section>{comment.comment}</section>
      </div>
    ) : (
      <div className='task-container-comment'>
        Nie ma żadnych komentarzy
      </div>
    )}
  </React.Fragment>

export default Comments