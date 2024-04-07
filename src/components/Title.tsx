const Title = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="title flex flex-col justify-start mb-4">
      <p className="text-gray-500 text-xl md:text-2xl font-semibold">{title}</p>
      <h1 className="text-gray-600 text-2xl md:text-3xl font-bold">
        {subtitle}
      </h1>
    </div>
  );
};

export default Title;
