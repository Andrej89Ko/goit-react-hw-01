import clsx from 'clsx';
import style from '../FriendList/FriendList.module.css';
import { HiStatusOffline } from 'react-icons/hi';
import { HiStatusOnline } from 'react-icons/hi';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img src={avatar} alt={name} className={style.avatar} width="50px" />
      <p className={style.friendName}>{name}</p>
      <p
        className={clsx(style.status, isOnline ? style.online : style.offline)}
      >
        {isOnline ? (
          <>
            {' '}
            Online <HiStatusOnline />{' '}
          </>
        ) : (
          <>
            {' '}
            Offline <HiStatusOffline />{' '}
          </>
        )}
      </p>
    </>
  );
};
export default FriendListItem;
