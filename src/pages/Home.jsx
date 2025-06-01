import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-4xl font-minecraft mb-6">Welcome to IceMC</h1>
      <p className="text-xl mb-8">Your Frosty Minecraft Adventure Awaits!</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="Survival Mode"
          description="Experience our unique survival world with custom features and challenges."
          icon="❄️"
        />
        <FeatureCard
          title="Creative Mode"
          description="Build your dreams in our creative world with unlimited resources."
          icon="🏗️"
        />
        <FeatureCard
          title="Community"
          description="Join our friendly community and make new friends!"
          icon="👥"
        />
      </div>
    </motion.div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-minecraft-secondary p-6 rounded-lg shadow-xl"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-minecraft mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}