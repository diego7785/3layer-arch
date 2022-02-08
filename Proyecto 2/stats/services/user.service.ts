import axios from "axios";

async function getUserById(id: string) {
  const route: string = `http://localhost:3000/api/user/${id}`;
  return axios
    .get(route)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

async function updateAttendanceAmount(id: string, ammount: number) {
  const route: string = `http://localhost:3000/api/user/${id}`;
  return axios
    .patch(route, {
      assistanceAmount: ammount,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export { getUserById, updateAttendanceAmount };
