import moment from 'moment';

interface CardProps {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  completed: boolean;
  onChange: (id: number, value: boolean) => void;
}

const Card = ({
  id,
  title,
  category,
  createdAt,
  completed,
  onChange,
}: CardProps) => {
  return (
    <div className='card' data-testid='todo'>
      <div className='flex items-start'>
        <div className='mr-[20px] flex h-[34px] w-[34px] items-center justify-center'>
          <label>
            <input
              data-testid={title}
              type='checkbox'
              checked={completed}
              onChange={() => onChange(id, !completed)}
              className='h-[14px] w-[14px]'
            />
          </label>
        </div>
        <div>
          <div className='card-title japanese mb-2'>{title}</div>
          <div className='card-description'>{category}</div>
        </div>
      </div>
      <div className='card-time'>
        {moment(createdAt).format('YYYY/MM/DD HH:mm')}
      </div>
    </div>
  );
};

export default Card;
