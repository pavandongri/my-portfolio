import { motion } from "framer-motion";
import { FaTrophy, FaMusic } from "react-icons/fa"; // Using FaTrophy for sports

const activities = [
  {
    category: "Sports",
    items: ["Cricket", "Badminton", "Basketball", "Athletics", "Kho Kho"],
    icon: <FaTrophy className="text-green-500 text-2xl" />
  },
  {
    category: "Musical Instruments",
    items: ["Flute", "Piano"],
    icon: <FaMusic className="text-blue-500 text-2xl" />
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

export default function ExtraCurricularActivities() {
  return (
    <section id="activities" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Extra Curricular Activities
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {activity.icon}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {activity.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {activity.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600"
                  >
                    <p className="text-gray-800 dark:text-white text-center font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
