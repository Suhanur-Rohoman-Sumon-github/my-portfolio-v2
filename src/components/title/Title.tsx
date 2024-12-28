const Title = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="my-12 px-4">
      <p className="text-center text-white text-xl md:text-2xl lg:text-3xl uppercase">
        {title}
      </p>

      <hr className="w-2/12 sm:w-4/12 mx-auto my-4" />

      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl  text-[#D0ABFF] font-bold uppercase">
        {subTitle}
      </h1>

      <hr className="w-2/12 sm:w-4/12 mx-auto my-4" />
    </div>
  );
};

export default Title;
