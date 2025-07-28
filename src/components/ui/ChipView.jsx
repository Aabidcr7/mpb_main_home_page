import React from 'react';
import PropTypes from 'prop-types';

const ChipView = ({ 
  items = [], 
  className = '',
  itemClassName = '',
  ...props 
}) => {
  return (
    <div 
      className={`flex flex-wrap gap-2 sm:gap-3 md:gap-4 ${className}`}
      {...props}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`
            inline-flex items-center justify-center
            px-3 py-2 sm:px-4 sm:py-2.5 md:px-[18px] md:py-[10px]
            text-sm sm:text-base md:text-[17px]
            font-medium font-urbanist
            leading-5 sm:leading-6 md:leading-[21px]
            text-global-1
            bg-[linear-gradient(180deg,#f3f3f1_0%,_#fafaf7_100%)]
            border border-[#f3f3f1]
            rounded-[16px] sm:rounded-[18px] md:rounded-[22px]
            transition-all duration-200
            hover:shadow-sm
            ${itemClassName}
          `.trim().replace(/\s+/g, ' ')}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

ChipView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  itemClassName: PropTypes.string,
};

export default ChipView;