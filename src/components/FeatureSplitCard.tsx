import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  ctaText: string;
  ctaTo: string; // route or hash
  imageSrc: string;
  reverse?: boolean; // image on right/left
  badge?: string;
};

export const FeatureSplitCard: React.FC<Props> = ({
  title,
  description,
  ctaText,
  ctaTo,
  imageSrc,
  reverse,
  badge,
}) => {
  return (
    <div className="overflow-hidden rounded-bala bg-white dark:bg-bala-dark-surface shadow-bala-light dark:shadow-bala-dark border border-bala-brown/10 dark:border-bala-dark-green/20">
      <div className={`grid grid-cols-1 md:grid-cols-2 ${reverse ? "md:[direction:ltr]" : ""}`}>
        {/* Image */}
        <div className={`${reverse ? "md:order-2" : ""} relative min-h-[220px] md:min-h-[260px]`}>
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bala-forest/15"></div>

          {badge && (
            <div className="absolute top-4 right-4 bg-bala-gold text-bala-forest font-body font-extrabold text-xs px-3 py-1 rounded-full shadow-sm">
              {badge}
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`${reverse ? "md:order-1" : ""} p-8 md:p-10 flex flex-col justify-center`}>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-bala-forest dark:text-white mb-3">
            {title}
          </h3>
          <p className="font-body text-bala-brown/80 dark:text-white/70 leading-relaxed mb-6">
            {description}
          </p>

          <Link
            to={ctaTo}
            className="inline-flex items-center justify-center w-fit px-6 py-3 rounded-bala font-body font-bold
                       bg-bala-forest hover:bg-bala-dark-green text-white transition-colors"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
};