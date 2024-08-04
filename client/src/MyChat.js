import { useState } from "react";

import { Chat } from "./Chat";
import { Login } from "./Login";

function MyChat() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="app">
      {currentUser ? (
        <Chat currentUser={currentUser} onLogout={() => setCurrentUser(null)} />
      ) : (
        <Login onLogin={setCurrentUser} />
      )}
    </div>
  );
}

export default MyChat;