import classes from './index.module.scss';

interface IProfile {
  _id?: string;
  name: string;
  gender: string;
  race: string;
  images: string[];
  createdAt: string;
}

function Profile({
  _id = '',
  name = '',
  gender = '',
  race = '',
  images = [],
  createdAt = '',
}: IProfile) {
  return (
    <div className={classes.root}>
      <div className={classes.slide}>
        {images.map((imgSrc: string, index: number) => (
          <img key={index} alt="Slide image" src={imgSrc} />
        ))}
      </div>
      <div className={classes.profile}>
        <p>{name}</p>
        <span className={classes.gender}>{gender}</span>
        <p>{race}</p>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}

export default Profile;
export type { IProfile };
