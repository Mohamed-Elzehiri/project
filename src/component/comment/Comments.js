import React, { useState } from "react";
import "./Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState({ text: "", parentId: null });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: Date.now(),
        text: comment,
        replies: [],
      };
      setComments([...comments, newComment]);
      setComment("");
    }
  };

  const handleReplySubmit = (e, parentId) => {
    e.preventDefault();
    if (reply.text.trim()) {
      const updatedComments = comments.map((c) => {
        if (c.id === parentId) {
          return {
            ...c,
            replies: [...c.replies, { id: Date.now(), text: reply.text }],
          };
        }
        return c;
      });
      setComments(updatedComments);
      setReply({ text: "", parentId: null });
    }
  };

  return (
    <div className="comments-section">
      <h2>التعليقات</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          placeholder="اكتب تعليقك..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">إرسال تعليق</button>
      </form>

      <div className="comment-list">
        {comments.map((c) => (
          <div key={c.id} className="comment">
            <p>{c.text}</p>
            <button onClick={() => setReply({ text: "", parentId: c.id })}>
              رد
            </button>

            {reply.parentId === c.id && (
              <form onSubmit={(e) => handleReplySubmit(e, c.id)}>
                <textarea
                  placeholder="اكتب ردك..."
                  value={reply.text}
                  onChange={(e) => setReply({ ...reply, text: e.target.value })}
                  required
                />
                <button type="submit">إرسال رد</button>
              </form>
            )}

            {c.replies.length > 0 && (
              <div className="reply-list">
                {c.replies.map((r) => (
                  <div key={r.id} className="reply">
                    <p>{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
