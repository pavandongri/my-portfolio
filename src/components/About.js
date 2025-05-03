import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-950 transition-colors"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5, once: false }}
        >
          <img
            src="/pavan-pic.jpg"
            alt="Dongri Pavan Kumar"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-xl border-4 border-blue-300"
          />
        </motion.div>

        {/* Right Section - Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5, once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Frontend Developer!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I am a versatile and creative designer with expertise in graphic, app, and website
            design. With a strong eye for aesthetics and a keen understanding of user experience,
            I create visually stunning and engaging designs that deliver results. I have experience
            working on projects ranging from branding and marketing campaigns to user interface design,
            brand logos, and app interface.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
