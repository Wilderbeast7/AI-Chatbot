import React from 'react';

// Your saved Questions and Answers
const savedQA = {
  "what is ai": "AI stands for Artificial Intelligence. It refers to machines that can simulate human intelligence!",
  "how to learn coding": "Start with basics of Python or JavaScript! Practice daily and build small projects.",
  "what is web development": "Web development involves building websites and applications using technologies like HTML, CSS, JavaScript, React, etc.",
  "what is data science": "Data Science is about extracting insights from data using statistics, machine learning, and computer science.",
  "can you suggest a learning path for career goal": "You can reach out to our team by mailing on 'torned17.edu.in@gmail.com' or contact your mentor on '95498 08067'.",
  "how do i enroll in a course": "Select category on navbar and choose your category and then purchase your desired course.",
  "i am struggling with topics can you guide me": "Click on the quiz practice button on the navbar.",
  "how can i improve": "Click on the quiz practice button on the navbar.",
  "can you give me tips to study more effectively": "Click on the quiz practice button on the navbar",
  "what are the top trending courses right now": "You can check our popular trending courses by following these steps. First, go to the categories and there you can check our popular courses section",
  "recommend a course based on my interest": "We have best courses on variety of topics you can check the course of your interest by going to the category section",
  "will i get a certificate after completing the course": "Yeah Sure you will be getting the certificate after completion of your course",
  "what exams can i prepare for with your platform": "You can prepare for multiple exams using our platform such as JEE , NEET , Olympiads and many more",
  "how can i download my course completion certificate": "Our team will send your certificate on your provided mail after completion of your course",
  "are there any mock tests available": "Yes mock tests are available on our mobile application. You can download our app using this link 'https://play.google.com/store/apps/details?id=apps.tornededu.com.in'.",
  "how do i reset my password": "You can reset your password by following these steps. First, go to the profile section then click on the settings and there you can see the option to reset your password.",
  "how can i get customer support if i face problems": "You can reach out to our team by mailing on 'torned17.edu.in@gmail.com' or contact your mentor on '95498 08067'.",
  "how do i track my course progress": "You can track your progress by going to profile section and then to enrolled courses.",
  "can i access courses offline": "Yes you can access your courses in offline mode", 
};

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const answerUserQuestion = (userQuestion) => {
    const cleanedQuestion = userQuestion.toLowerCase().trim();

    if (savedQA[cleanedQuestion]) {
      const botAnswer = createChatBotMessage(savedQA[cleanedQuestion]);
      updateState(botAnswer);
    } else {
      const unknownAnswer = createChatBotMessage("Sorry, I don't have an answer for that yet. 😔");
      updateState(unknownAnswer);
    }
  };

  //  This is the new initial action for Start Button
  const initialAction = () => {
    const welcomeMessage = createChatBotMessage("Hello! How may i assist you today.");
    updateState(welcomeMessage);
  };

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          actions: { 
            answerUserQuestion,
            initialAction, // <-- Also pass the initialAction to children
          },
        })
      )}
    </>
  );
};

export default ActionProvider;
