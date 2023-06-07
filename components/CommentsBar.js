const CommentsBar = ({ data }) => {
  const OneStar = data.filter((item) => {
    if (Math.floor(item.rating) == 1) {
      return data;
    }
  });
  const TwoStar = data.filter((item) => {
    if (Math.floor(item.rating) == 2) {
      return data;
    }
  });
  const ThreeStar = data.filter((item) => {
    if (Math.floor(item.rating) == 3) {
      return data;
    }
  });
  const FourStar = data.filter((item) => {
    if (Math.floor(item.rating) == 4) {
      return data;
    }
  });
  const FiveStar = data.filter((item) => {
    if (Math.floor(item.rating) == 5) {
      return data;
    }
  });
  console.log(ThreeStar);
  const Sections = [
    {
      name: "Excellent",
      value: Math.ceil((FiveStar.length / data.length) * 100) || 0,
    },
    {
      name: "Great",
      value: Math.ceil((FourStar.length / data.length) * 100) || 0,
    },
    {
      name: "Average",
      value: Math.ceil((ThreeStar.length / data.length) * 100) || 0,
    },
    {
      name: "Poor",
      value: Math.ceil((TwoStar.length / data.length) * 100) || 0,
    },
    {
      name: "Bad",
      value: Math.ceil((OneStar.length / data.length) * 100) || 0,
    },
  ];
  return (
    <div className="w-full">
      {Sections.map((item, idx) => (
        <div key={idx} className="flex w-full justify-center items-center my-3">
          <div className="text-white w-10 mr-10 flex-shrink-0">{item.name}</div>
          <div className="flex-grow relative w-full h-3 rounded-full bg-white overflow-hidden">
            <span
              className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 absolute left-0 top-0"
              style={{ width: `${item.value}%` }}
            />
          </div>
          <div className="text-white ml-10 w-10 flex-shrink-0">
            {item.value}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsBar;
