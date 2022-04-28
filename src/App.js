import './App.css';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const projectID = '9689f653-a473-44c0-a48e-bb33f6569ea2';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;


  return (
     <ChatEngine
      height="90vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('./poing.ogg').play()}
    />
);
}
export default App;
