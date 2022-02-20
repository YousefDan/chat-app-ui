import "./chatroom.scss";

const Chatroom = () => {
  return (
    <section className="chatroom">
      <div className="chatroomHeader">
        <div className="chatroomTitle">
          <i className="fas fa-smile"></i>
          <span>ChatCord</span>
        </div>
        <div className="leaveRoomBtn">Leave Room</div>
      </div>
      <div className="chatroomBody">
        <div className="chatroomSideber">
          <div className="roomNameWrapper">
            <div className="roomNameTitle">
              <div>
                <i className="fas fa-comments"></i>
                RoomName:
              </div>
              <div className="theRoom">JavaScript</div>
            </div>
            <div className="onlineUsersWrapper">
              <i className="fas fa-users"></i>
              <span>Online Users:</span>
              <ul className="onlineUsersList">
                <li className="onlineUser">Youssef</li>
                <li className="onlineUser">Ali</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="messagesContainer">
          <div className="messageWrapper">
            <div className="messageInfo">
              <span>Username</span>
              <span>21:21</span>
            </div>
            <p className="message">Hi Youssef welcome to chatroom</p>
          </div>
        </div>
      </div>
      <div className="chatroomFooter">
        <input type="text" placeholder="Enter Message" />
        <button className="sendMsgBtn">
          <i className="fas fa-paper-plane"></i>
          Send
        </button>
      </div>
    </section>
  );
};

export default Chatroom;
