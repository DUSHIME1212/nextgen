
import { motion } from "framer-motion";

const companies = [
  { name: "Microsoft", url: "https://images.unsplash.com/photo-1642860086450-f711c98b45fd?w=200&h=100&fit=crop" },
  { name: "Google", url: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop" },
  { name: "Apple", url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&h=100&fit=crop" },
  { name: "Amazon", url: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=200&h=100&fit=crop" },
  { name: "Meta", url: "https://images.unsplash.com/photo-1642160363505-c6c2cbea31b1?w=200&h=100&fit=crop" },
];

const MarqueeSection = () => {
  return (
    <div className="bg-white/50 backdrop-blur-sm py-10 mt-10">
      <div className="">
        <p className="text-center text-sm font-medium text-[#123c48]/70 mb-6">
          Trusted by leading companies worldwide
        </p>
        <div className="overflow-hidden space-y-8 relative">
          <motion.div 
            className="flex space-x-16"
            animate={{ x: [0, -1500] }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }}
          >
            {companies.map((company) => (
              <div 
                key={company.name} 
                className="flex items-center justify-center min-w-[200px] group"
              >
                {/* <h1>{company.name}</h1> */}
                <img
                  src={company.url}
                  alt={company.name}
                  className="w-full h-12 object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            ))}
            
            {/* Duplicate companies for seamless loop */}
            {companies.map((company) => (
              <div 
                key={`${company.name}-duplicate`} 
                className="flex items-center justify-center min-w-[200px] group"
              >
                {/* <h1>{company.name}</h1> */}

                <img
                  src={company.url}
                  alt={company.name}
                  className="w-full h-12 object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
