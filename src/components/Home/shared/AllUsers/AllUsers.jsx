import { useEffect, useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

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
        `http://localhost:3000/api/delete/${selectedUserId}`,
        {
          method: "DELETE",
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
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:3000/api/auth/user-info");
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
      <div className=" w-full sm:px-8">
        <h1>yu: {user.length}</h1>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">Full Name</th>
                  <th className="px-5 py-3">User Role</th>
                  <th className="px-5 py-3">Created at</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {user.map((d, index) => (
                  <tr key={d._id}>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{index + 1}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-full w-full rounded-full"
                            src={d?.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap">{d.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">user</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{d.createdAt}</p>
                    </td>

                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <button
                        onClick={() => handleDelete(d._id)}
                        className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white"
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
