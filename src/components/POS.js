import { motion } from "framer-motion";
import { MdOutlineWorkOutline } from "react-icons/md";

const responsibilities = [
  {
    title: "Team Lead",
    org: "Datanova",
    period: "2025 - Present",
    details: [
      "Leading multiple full-stack projects and driving technical decisions.",
      "Collaborating with cross-functional teams to deliver scalable solutions.",
      "Mentoring junior developers and ensuring code quality.",
    ],
  },
  {
    title: "Team Lead",
    org: "Jithvar Consultancy Services Pvt Ltd",
    period: "2024 - 2025",
    details: [
      "Led a team of developers in building scalable web solutions.",
      "Oversaw Raftaar news platform's architecture and SEO strategy.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function POS() {
  return (
    <section id="responsibility" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Positions of Responsibility
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {responsibilities.map((res, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={cardVariants}
              className="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <MdOutlineWorkOutline className="text-blue-500 text-xl" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {res.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                <span className="font-medium">{res.org}</span> — {res.period}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                {res.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
