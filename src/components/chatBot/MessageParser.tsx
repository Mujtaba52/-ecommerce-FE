import React from 'react';

const MessageParser = ({ children, actions }: {
    children: any;
    actions: {
      handleGotIt: () => void;
      handleUserInput: () => void;
    };
  }) => {
  const parse = (message: any) => {
    console.log(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;