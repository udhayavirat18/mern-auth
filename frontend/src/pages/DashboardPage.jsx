import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto mt-10 p-8 bg-white bg-opacity-30 backdrop-blur-xl rounded-xl shadow-2xl border border-purple-200"
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text">
        Dashboard
      </h2>

      <div className="space-y-6">
        <motion.div
          className="p-4 bg-white bg-opacity-20 rounded-lg border border-purple-300 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-fuchsia-600 mb-3">Profile Information</h3>
          <p className="text-gray-800">Name: {user.name}</p>
          <p className="text-gray-800">Email: {user.email}</p>
        </motion.div>

        <motion.div
          className="p-4 bg-white bg-opacity-20 rounded-lg border border-purple-300 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-fuchsia-600 mb-3">Account Activity</h3>
          <p className="text-gray-800">
            <span className="font-bold">Joined: </span>
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-gray-800">
            <span className="font-bold">Last Login: </span>
            {formatDate(user.lastLogin)}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-purple-100"
        >
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPage;
