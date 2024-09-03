import Button from '../ui/Button.tsx';

type SessionItemProps = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

const SessionItem = ({ image, title, summary, id }: SessionItemProps) => {
  return (
    <article className='session-item'>
      <img src={image} alt={title} />
      <div className='session-data'>
        <div>
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
        <p className='actions'>
          <Button to={id}>Learn More</Button>
        </p>
      </div>
    </article>
  );
};

export default SessionItem;
