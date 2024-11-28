import moment from "moment";

interface CardProps {
  title: string;
  category: string;
  createdAt: string;
}

const Card = ({ title, category, createdAt }: CardProps) => {
  return (
    <div className="card" data-testid="todo">
      <div className="flex items-start">
        <div className="h-[34px] w-[34px] flex justify-center items-center mr-[20px]">
        <label>
          <input type="checkbox" defaultChecked={false} className="w-[14px] h-[14px]" />
        </label>
        </div>
        <div>
          <div className="card-title japanese mb-2">{title}</div>
          <div className="card-description">{category}</div>
        </div>
      </div>
      <div className="card-time">{moment(createdAt).format("YYYY/MM/DD HH:mm")}</div>
    </div>
  );
};

export default Card;
