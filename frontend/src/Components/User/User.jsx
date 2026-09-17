// import { useEffect, useState } from "react";
// import api from "../services/api";

// function Users() {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         getUsers();
//     }, []);

//     const getUsers = async () => {
//         try {
//             const response = await api.get("/users");

//             setUsers(response.data);
//         } catch (error) {
//             console.error(error);
//             setError("Failed to load users.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return <h2>Loading users...</h2>;
//     }

//     if (error) {
//         return <h2>{error}</h2>;
//     }

//     return (
//         <div>
//             <h1>Users</h1>

//             {users.length === 0 ? (
//                 <p>No users found.</p>
//             ) : (
//                 users.map((user) => (
//                     <div key={user.id}>
//                         <h3>{user.name}</h3>
//                         <p>{user.email}</p>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default Users;