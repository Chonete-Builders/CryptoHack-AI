'use client';

import Image from 'next/image';
import NEW_IDEA from '../utils/constants';
import Card from '../components/Card';

const img = '/image.svg';

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start gap-8 p-5 bg-[#B4AB9A]">
      <div className="w-full max-w-[1057px] min-h-[285px] bg-[#F5F5F5] rounded-[50px] py-5 pr-[4%] pl-[10%] flex-col md:flex-row flex items-center justify-start md:justify-start gap-4 md:gap-[10%] ">
        <h1 className="text-[#2C2C2C] font-bold text-5xl">{NEW_IDEA.name}</h1>

        <div className="flex flex-col items-start justify-center ">
          <Image
            src={img}
            alt="image"
            height={100}
            width={100}
            className="object-contain"
          />
          <p>
            AI Generated
            <br /> Image
          </p>
        </div>

        <div className="flex flex-row md:flex-col items-center justify-center gap-7 md:ml-auto">
          <button
            onClick={() => console.log('Share Clicked')}
            className="bg-[#2C2C2C] text-white w-[108px] h-[32px] rounded-[8px]"
          >
            Share
          </button>
          <button
            onClick={() => console.log('Delete Clicked')}
            className="bg-[#2C2C2C] text-white w-[108px] h-[32px] rounded-[8px]"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="w-full max-w-[1057px] flex-col md:flex-row gap-4 flex items-center justify-between p-1">
        <Card
          title="Description"
          content={NEW_IDEA.description}
          className="max-w-[638px]  h-[594px] gap-5 "
          contentStyle="h-[473px]"
        />

        <div className="w-full flex flex-col items-center justify-between gap-8 max-w-[375px] h-full">
          <Card
            title="Impact"
            content={NEW_IDEA.impact}
            className="max-w-[372px]  h-[252px] gap-2 "
            contentStyle=" h-[153px] "
          />

          <Card
            title="Uniqueness"
            content={NEW_IDEA.uniqueness}
            className="max-w-[372px]  h-[327px] gap-2 "
            contentStyle=" h-[216px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
