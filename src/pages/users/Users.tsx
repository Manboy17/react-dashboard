import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import noavatar from "../../assets/noavatar.png";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || noavatar} alt="avatar" />;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
    type: "string",
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    type: "string",
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "CreatedAt",
    width: 150,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <div className="chart">
        <DataTable slug="users" columns={columns} rows={userRows} />
      </div>
      {open && <Add columns={columns} slug="user" setOpen={setOpen} />}
    </div>
  );
};

export default Users;
