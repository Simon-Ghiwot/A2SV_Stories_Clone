const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-[#2564E5]   w-full flex flex-col justify-between items-center h-[900px] text-white pb-24 text-center pt-24">
      <h2 className="text-3xl font-bold text-white">Subscribe to our newsletter!</h2>
      <form onSubmit={handleSubmit} className="bg-[#2564E5]  w-full flex flex-col justify-center items-center h-full gap-1">
        <label>Email</label>
        <br />
        <input type="text" className="w-[600px] rounded-md h-10"/>
        <br />
        <label>First Name</label>
        <br />
        <input type="text"  className="w-[600px] rounded-md h-10"/>
        <br />
        <label>Last Name</label>
        <br />
        <input type="text"  className="w-[600px] rounded-md h-10"/>
        <br />
        <label className="flex gap-3">
          <input type="checkbox" />
          Check if related to A2SV as a student, mentor, or other
        </label>
        <br />
        <button className="bg-amber-400 rounded-md p-2 pr-64 pl-64 text-white font-bold">Subscribe Now</button>
      </form>
    </div>
  );
};
export default NewsLetter;
