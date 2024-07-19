
export function TwitterFollowCard({ userName, name, isFollowing }) {
  const imgSrc = `https://unavatar.io/${userName}`;
  console.log(isFollowing)
  return (
    <article className="tw-seguir">
      <header className="tw-seguir-header">
        <img className="tw-seguir-avatar" src={imgSrc} alt="avatar" />
        <div className="tw-seguir-info">
          <strong>{name}</strong>
          <span className="tw-seguir-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-seguir-boton" type="button">
          {isFollowing ? 'Siguiendo' : 'Seguir'}
        </button>
      </aside>
    </article>
  );
  
}

export default TwitterFollowCard;
