import { useDispatch } from "react-redux";
import { addLike } from "../features/StoriesSlice";

const Card = ({
  id,
  picture,
  likes,
  experience,
  what_i_did,
  how_life_changed,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addLike(id));
  };
  return (
    <div className="flex w-4/5 shadow-2xl mt-8 rounded-2xl p-8">
      <div className="w-1/2">
        <img className="w-4/5  rounded-2xl h-auto" src={process.env.PUBLIC_URL + picture} alt={"profile"} />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-lg font-bold">My A2SV Experience</h2>
        <p  className="italic text-sm">{experience}</p>
        <h2 className="text-lg font-bold">What I did/I am doing now</h2>
        <p  className="italic text-sm">{what_i_did}</p>
        <h2 className="text-lg font-bold">How the A2SV program changed my life</h2>
        <p  className="italic text-sm">{how_life_changed}</p>
        <span className="flex gap-2 justify-start mt-3">
            <span>{likes}</span>
            <button onClick={handleClick}>Like</button>
     
        </span>
       
      </div>
    </div>
  );
};
export default Card;
