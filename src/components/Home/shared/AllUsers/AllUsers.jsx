import { useEffect, useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [user, setUser] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDelete = async (userId) => {
    setSelectedUserId(userId);
    setDeleteModalOpen(true);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setSelectedUserId(null);
  };

  const handleConfirmDelete = async () => {
    try {
      const res = await fetch(
        `https://ecomerce-project-api.vercel.app/api/auth/delete/${selectedUserId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      // If the delete request is successful, update the user state
      const updatedUsers = user.filter((u) => u._id !== selectedUserId);
      setUser(updatedUsers);

      // Close the modal
      setDeleteModalOpen(false);
      setSelectedUserId(null);
      toast.success("User Deleted successful");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://nazmul-ecomerce-server-1wnx.vercel.app/api/auth/user-info",
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await res.json();
        console.log(data.payload.products);
        setUser(data.payload.products);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="w-full  sm:px-8">
        <h1>All users: {user.length}</h1>
        <div className="overflow-y-hidden border rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-widest text-left text-white uppercase bg-blue-600">
                  <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">Full Name</th>
                  <th className="px-5 py-3">User Email</th>
                  <th className="px-5 py-3">Created at</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {user.map((d, index) => (
                  <tr key={d._id}>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="whitespace-no-wrap">{index + 1}</p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src={d?.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap">{d.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="whitespace-no-wrap">{d.email}</p>
                      <p className="whitespace-no-wrap">{d.address}</p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="whitespace-no-wrap">{d.createdAt}</p>
                    </td>

                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <button
                        onClick={() => handleDelete(d._id)}
                        className="px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default AllUsers;
