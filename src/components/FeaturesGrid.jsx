import { motion } from "framer-motion";
import { Bolt, Volume2, MonitorSmartphone, BatteryFull } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    { icon: <Bolt size={36} />, title: "120W Fast Charge" },
    { icon: <Volume2 size={36} />, title: "Dolby Atmos" },
    { icon: <MonitorSmartphone size={36} />, title: "AMOLED HDR" },
    { icon: <BatteryFull size={36} />, title: "5000mAh Battery" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="features"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-background)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)] via-[var(--color-background)] to-[var(--color-surface)] blur-3xl opacity-40" />

      <div className="relative z-10 w-full max-w-7xl px-6 sm:px-10 lg:px-16 py-24 sm:py-28 lg:py-32 flex flex-col items-center text-center space-y-12 sm:space-y-14 lg:space-y-16">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] leading-snug"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Lightning Performance. Immersive Experience.
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 w-full"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(138,43,226,0.5)",
                y: -8,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="flex flex-col items-center justify-center text-center gap-4 bg-[var(--color-surface)] rounded-3xl p-8 sm:p-10 text-[var(--color-text-primary)] shadow-[0_0_20px_rgba(138,43,226,0.15)] hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] cursor-pointer"
            >
              <div className="text-[var(--color-primary)]">{feature.icon}</div>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[var(--color-primary)]/25 to-transparent blur-3xl" />
    </section>
  );
}
