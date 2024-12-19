import css from './BlogCard.module.css';

const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  return (
    <div className={css.card}>
      <div className={css.cardHeader}>
        <img className={css.cardPoster} src={poster} alt={title} />
      </div>
      <div className={css.cardBody}>
        <span className={css.tag}>{tag}</span>
        <h2 className={css.cardTitle}>{title}</h2>
        <p className={css.cardText}>{description}</p>
      </div>
      <div className={css.cardFooter}>
        <div className={css.userBox}>
          <img className={css.avatar} src={avatar} alt={name} />
          <div>
            <h3 className={css.userName}>{name}</h3>
            <small className={css.date}>{postedAt(postedAt)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
