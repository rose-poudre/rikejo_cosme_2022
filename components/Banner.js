import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/rikejo-cosme.appspot.com/o/woman-gc90fb67d2_1920.jpg?alt=media&token=af32684b-e741-464d-a02c-71443f221be9"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
