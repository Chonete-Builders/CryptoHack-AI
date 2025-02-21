"use client"

import Image from "next/image";

const img = "/image.svg"

const Page = () => {
  const newIdea = {
    name: "Idea Name",
    image: "",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    impact: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the  ���1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    uniqueness: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start gap-8 p-5 bg-[#B4AB9A]">
      <div className="w-full max-w-[1057px] min-h-[285px] bg-[#F5F5F5] rounded-[50px] py-5 pr-[4%] pl-[10%] flex-col md:flex-row flex items-center justify-start md:justify-start gap-4 md:gap-[10%] ">
        <h1 className="text-[#2C2C2C] font-bold text-5xl">{newIdea.name}</h1>

        <div className="flex flex-col items-start justify-center " >
          <Image src={img} alt="image" height={100} width={100} className="object-contain" /> 
          <p>AI Generated<br/> Image</p>
        </div>

        <div className="flex flex-row md:flex-col items-center justify-center gap-7 md:ml-auto">
          <button className="bg-[#2C2C2C] text-white w-[108px] h-[32px] rounded-[8px]">Share</button>
          <button className="bg-[#2C2C2C] text-white w-[108px] h-[32px] rounded-[8px]">Delete</button>
        </div>
      </div>

      <div className="w-full max-w-[1057px] flex-col md:flex-row gap-4 flex items-center justify-between p-1">
        <div className="bg-[#F5F5F5] w-full max-w-[638px] rounded-[50px] h-[594px] flex flex-col gap-5 items-start justify-center p-5">
          <h2 className="text-[#2C2C2C] text-base font-semibold ml-5">Description</h2>

          <div className="bg-white h-[473px] p-4 border-[1px] border-[#D9D9D9] rounded-[10px] overflow-y-auto scrollbar-hide">
            <p className="text-[#1E1E1E] font-normal text-base leading-[22.4px] whitespace-pre-line">
              {newIdea.description}
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-between gap-8 max-w-[375px] h-full">
          <div className="bg-[#F5F5F5] w-[372px] h-[252px] rounded-[50px] flex items-start justify-center flex-col gap-2 p-4">
            <h2 className="text-[#2C2C2C] text-base font-semibold ml-5">Impact</h2>

            <div className="w-full max-w-[326px] h-[153px] bg-white overflow-y-auto scrollbar-hide p-4 border-[1px] border-[#D9D9D9] rounded-[10px]">
              <p className="text-[#1E1E1E] font-normal text-base leading-[22.4px] whitespace-pre-line">
                {newIdea.impact}
              </p>
            </div>
          </div>

          <div className="bg-[#F5F5F5] w-[372px] h-[327px] rounded-[50px] flex items-start justify-center flex-col gap-2 p-4">
            <h2 className="text-[#2C2C2C] text-base font-semibold ml-5">Uniqueness</h2>

            <div className="w-full max-w-[331px] h-[216px] bg-white overflow-y-auto scrollbar-hide p-4 border-[1px] border-[#D9D9D9] rounded-[10px]">
              <p className="text-[#1E1E1E] font-normal text-base leading-[22.4px] whitespace-pre-line">
                {newIdea.uniqueness}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;