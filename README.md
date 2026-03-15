# Real-Time Collaborative Document Editor

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: PANTHANGI SHIVA

*INTERN ID*: CTIS6561

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 6 WEEKS 

*MENTOR*:NEELA SANTHOSH KUMAR

*DESCRIPTION*

The Real-Time Collaborative Document Editor is a web-based application developed as part of a Full Stack Web Development internship task. The main objective of this project is to allow multiple users to edit a document simultaneously and view changes instantly without refreshing the page. This type of system is widely used in modern online collaboration platforms where users need to work together in real time.

The application works using real-time communication between the server and the client. When one user types or modifies the document, the changes are immediately transmitted to the server and then broadcast to all connected users. This ensures that everyone viewing the document can see updates instantly. This functionality is achieved using WebSocket technology, which enables continuous two-way communication between the client and the server.

The backend of the application is developed using Node.js and Express.js. Node.js provides a runtime environment that allows JavaScript to run on the server side, making it efficient for handling multiple connections at the same time. Express.js is used as a web framework to create the server and manage routing. To implement real-time communication, the Socket.IO library is used. Socket.IO allows the server and clients to exchange messages instantly, making it ideal for collaborative applications.

The frontend of the application is built using HTML and JavaScript. HTML is used to structure the web page and create the text editing interface where users can type and edit the document. JavaScript is used to handle events such as detecting changes in the text area and sending those updates to the server through Socket.IO. When the server receives the update, it sends the same information to all other connected clients so that their screens update automatically.

The main tools used in this project include Visual Studio Code as the code editor, Node.js as the backend runtime environment, Express.js as the web framework, and Socket.IO for enabling real-time communication. Git and GitHub are used for version control and project management, allowing the code to be stored and shared online. A web browser is used to run and test the application.

This type of collaborative editing system has many practical applications. It is commonly used in online platforms such as document editing tools, team collaboration software, educational platforms, and remote working environments. For example, teams working on reports, assignments, or project documentation can edit the same file together in real time. It can also be used in classrooms where students collaborate on notes or group projects.

In conclusion, the Real-Time Collaborative Document Editor demonstrates how real-time communication technologies can be used to build interactive web applications. The project highlights important concepts of full stack development, including client-server architecture, real-time data synchronization, and web application development. By completing this project, developers gain practical experience in building modern web applications that support real-time collaboration and multi-user interaction.

This project is a real-time collaborative document editor developed as part of an internship task.

## Technologies Used
- Node.js
- Express.js
- Socket.IO
- HTML
- JavaScript

## Features
- Multiple users can edit the same document at the same time
- Real-time text updates
- Collaborative editing

## How to Run

1. Go to the server folder
2. Run the command:
node server.js
3. Open client/index.html in your browser
4. Open it in two tabs to test real-time editing

*OUT PUT*

<img width="1756" height="530" alt="Image" src="https://github.com/user-attachments/assets/7dd0a936-9866-45ab-8444-ce9e175ef252" />





