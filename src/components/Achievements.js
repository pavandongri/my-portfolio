import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const achievements = [
  {
    title: "LeetCode",
    detail: "Rating: 2046",
    highlight: "Best Global Rank: 221",
    link: "https://leetcode.com"
  },
  {
    title: "CodeChef",
    detail: "Rating: 1939",
    highlight: "Best Global Rank: 382",
    link: "https://www.codechef.com"
  },
  {
    title: "Codeforces",
    detail: "Rating: 1400+",
    highlight: "Stable Performer",
    link: "https://codeforces.com"
  },
  {
    title: "HackerRank",
    detail: "6-Star Coder",
    highlight: "Gold Badge in Problem Solving",
    link: "https://www.hackerrank.com"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={cardVariants}
              className="group p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaAward className="text-yellow-500 text-xl" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{ach.title}</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{ach.detail}</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                {ach.highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
