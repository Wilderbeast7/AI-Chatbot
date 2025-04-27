import React from 'react';

const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
    if (message.trim() === "") return;

    actions.answerUserQuestion(message);
  };

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { parse, actions })
      )}
    </>
  );
};

export default MessageParser;

