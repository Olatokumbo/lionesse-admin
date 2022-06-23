export const UserColumns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "firstName", headerName: "First name", width: 100 },
  { field: "lastName", headerName: "Last name", width: 100 },
  {
    field: "email",
    headerName: "Email",
    type: "number",
    width: 190,
  },
  {
    field: "password",
    headerName: "Password",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: false,
    width: 150,
  },
  {
    field: "role",
    headerName: "Role",
    sortable: false,
    width: 160,
  },
];

export const ClientColumns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 100 },
  { field: "lastName", headerName: "Last name", width: 100 },
  {
    field: "email",
    headerName: "Email",
    type: "number",
    width: 160,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "sex",
    headerName: "Sex",
    sortable: false,
    width: 150,
  },
  {
    field: "callCenter",
    headerName: "Call Center",
    sortable: false,
    width: 160,
  },
  {
    field: "clientClass",
    headerName: "Client Class",
    sortable: false,
    width: 160,
  },
  {
    field: "memberId",
    headerName: "Member ID",
    sortable: false,
    width: 160,
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: false,
    width: 160,
  },
];

export const LocationColumns = [
  { field: "id", headerName: "ID", width: 290 },
  { field: "name", headerName: "Name", width: 300 },
];
