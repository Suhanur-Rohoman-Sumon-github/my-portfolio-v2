const Title = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="my-12">
      <p className="text-center text-white text-2xl uppercase">{title}</p>
      <hr className="w-4/12  mx-auto my-4" />
      <h1 className="text-center text-4xl text-[#D0ABFF] font-bold uppercase">
        {subTitle}
      </h1>
      <hr className="w-4/12  mx-auto my-4" />
    </div>
  );
};

export default Title;
