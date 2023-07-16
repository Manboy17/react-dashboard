import { topDealUsers } from "../../data";
import "./topBox.scss";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="users">
        {topDealUsers.map((user) => (
          <div className="user" key={user.id}>
            <img src={user.img} alt="user" />
            <div className="userInfo">
              <span className="username">{user.username}</span>
              <span className="email">{user.email}</span>
            </div>
            <p className="amount">{user.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
