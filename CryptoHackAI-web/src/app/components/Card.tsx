import React from 'react';

interface CardProps {
  content: string;
  title: string;
  className: string;
  contentStyle: string;
}

const Card: React.FC<CardProps> = ({
  content,
  title,
  className,
  contentStyle,
}) => {
  return (
    <div
      className={`bg-[#F5F5F5] w-full  rounded-[50px] flex flex-col  items-start justify-center p-5 ${className} `}
    >
      <h2 className="text-[#2C2C2C] text-base font-semibold ml-5">{title} </h2>

      <div
        className={`bg-white  p-4 border-[1px] border-[#D9D9D9] rounded-[10px] overflow-y-auto scrollbar-hide ${contentStyle} `}
      >
        <p className="text-[#1E1E1E] font-normal text-base leading-[22.4px] whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
