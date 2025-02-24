// components/IdeaCard.tsx
import Image from "next/image";
const IdeaCard = ({ title, description }: { title: string; description: string }) => {
    return (
      <div className="bg-purple-900 text-white p-4 space-y-1 rounded-lg gap-6 w-[] flex items-center justify-between ">
     <Image src='/CryptoStarkLogo.png' width={90} height={50} className="rounded-lg" alt="" />
       <div> <h3 className="font-semibold text-md">{title}</h3>
        <p className="text-xs text-gray-200">{description}</p>
   </div>  
    </div>
    );
  };
  
  export default IdeaCard;
  