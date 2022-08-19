import avatar1 from "../../assets/perfil1.jpg";
import avatar2 from "../../assets/perfil2.jpg";
import avatar3 from "../../assets/perfil3.jpg";
import avatar4 from "../../assets/perfil4.jpg";

const user = [
  {
    id: 2,
    correo: "mariocam@gmail.com",
    perfiles: [
      {
        id: 1,
        nombre: "mario",
        avatar: avatar1,
      },
      {
        id: 2,
        nombre: "luis",
        avatar: avatar2,
      },
      {
        id: 3,
        nombre: "julia",
        avatar: avatar3,
      },
    ],
  },
  {
    id: 2,
    correo: "mariocam123@gmail.com",
    perfiles: [
      {
        id: 1,
        nombre: "juan",
        avatar: avatar4,
      }
    ],
  }
];

export default user;