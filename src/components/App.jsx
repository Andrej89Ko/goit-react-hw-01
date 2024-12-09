import user from '../assets/userData.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json'

import './App.css';
import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import TransactionHistory from './TransactionHistory/TransactionHistory';

function App() {

  return (
    <>
    <Profile
    name={user.username}
    tag={user.tag}
    location={user.location}
    image={user.avatar}
    stats={user.stats} />

    <FriendList friends={friends} />

     < TransactionHistory items={transactions}/>
    </>
  )
}

export default App;
