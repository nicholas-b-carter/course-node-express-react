import React from "react";
import {PropTypes} from 'prop-types';

 let CommentForm = React.createClass({
  propTypes: {
    onCommentSubmit: PropTypes.func,
  },
  getInitialState: function () {
    return { author: '', text: '' };
  },
  handleAuthorChange: function (e) {
    this.setState({ author: e.target.value });
  },
  handleTextChange: function (e) {
    this.setState({ text: e.target.value });
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
     this.props.onCommentSubmit({author, text});
     this.setState({author: '', text: '' });
  },
  render: function () {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
          />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
          />
        <input type="submit" disabled={!this.state.author || !this.state.text} value="Post" />
      </form>
    );
  }
});

export default CommentForm;
