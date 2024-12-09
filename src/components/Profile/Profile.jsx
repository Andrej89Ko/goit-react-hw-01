import style from './Profile.module.css'

 const Profile = ({name, tag, location, image, stats}) => {
  return (
    <div className={style.userCard}>
        <div className={style.avatar}>
            <img className={style.img}
            src={image}
            alt="User avatar"
            />
            <p className={style.userName}>{name}</p>
            <p className={style.aboutText}>@{tag}</p>
            <p className={style.aboutText}>{location}</p>
        </div>
            <ul className={style.listUser}>
                <li className={style.listItemUser}>
                <span className={style.itemText}>Followers</span>
                <span className={style.itemCount}>{stats.followers}</span>
                </li>
                <li className={style.listItemUser}>
                <span className={style.itemText}>Views</span>
                <span className={style.itemCount}>{stats.views}</span>
                </li>
                <li className={style.listItemUser}>
                <span className={style.itemText}>Likes</span>
                <span className={style.itemCount}>{stats.likes}</span>
                </li>
            </ul>
    </div>
  )
}
export default Profile;
