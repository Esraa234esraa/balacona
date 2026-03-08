// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Offer } from '../../types';
// import { Clock, TrendingUp } from 'lucide-react';

// interface OfferCardProps {
//   offer: Offer;
// }

// export const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
//   const [timeLeft, setTimeLeft] = useState('');

//   useEffect(() => {
//     const updateTimer = () => {
//       const now = new Date();
//       const end = new Date(offer.endDate);
//       const diff = end.getTime() - now.getTime();

//       if (diff <= 0) {
//         setTimeLeft('انتهت');
//         return;
//       }
//       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((diff / 1000 / 60) % 60);

//       setTimeLeft(`${days}د ${hours}س ${minutes}د`);
//     };

//     updateTimer();
//     const interval = setInterval(updateTimer, 60000);
//     return () => clearInterval(interval);
//   }, [offer.endDate]);

//   const offerLabel = {
//     percentage: `خصم ${offer.value}%`,
//     fixed: `خصم ${offer.value} جنية`,
//     buy_get: `اشتري واحصل على ${offer.value}`,
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="relative bg-gradient-to-br from-bala-gold to-orange-500 text-white rounded-2xl overflow-hidden shadow-lg h-64 flex items-end cursor-pointer group"    >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-20">
//       <TrendingUp className="w-36 h-36 absolute -top-6 -right-6" />      </div>

//       {/* Content */}
//       <div className="relative w-full p-6 space-y-3">
//         <h3 className="text-2xl font-bold">{offer.title}</h3>
//         <p className="text-sm opacity-90">{offer.description}</p>
//         <div className="flex items-center justify-between">
//           <span className="text-xl font-bold">{offerLabel[offer.type]}</span>
//           <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
//             <Clock size={14} />
//             <span className="text-xs">{timeLeft}</span>
//           </div>
//         </div>
//       </div>

//       {/* Hover Overlay */}
//       <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//         <span className="text-white font-bold">عرض الآن</span>
//       </div>
//     </motion.div>
//   );
// };