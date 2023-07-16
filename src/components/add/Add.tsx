import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
  columns: GridColDef[];
  slug: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = ({ columns, slug, setOpen }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="add">
      <div className="info">
        <div className="close" onClick={() => setOpen(false)}>
          x
        </div>
        <h1 className="title">Add new {slug}</h1>
        <form onSubmit={handleSubmit} className="form">
          {columns
            .filter((column) => column.field !== "id" && column.field !== "img")
            .map((item) => (
              <div className="input">
                <label className="label">{item.headerName}</label>
                <input type={item.field} placeholder={item.headerName} />
              </div>
            ))}
          <button className="send">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
