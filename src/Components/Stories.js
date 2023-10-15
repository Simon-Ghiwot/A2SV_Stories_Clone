import { selectAllStories } from "../features/StoriesSlice";
import { useSelector } from "react-redux";
import Card from "./Card";
const Stories = () => {
  const stories = useSelector(selectAllStories);
  return (
    <div className="flex flex-col justify-between items-center bg-slate-100">
      <h1 className="text-4xl font-bold mb-3">Impact Stories</h1>
      <p className="text-2xl ">
        Behind every success is a story. Learn about the stories of A2SVians.
      </p>
      {stories.map((story) => (
        <Card
          key={story.id}
          id={story.id}
          picture={story.picture}
          experience={story.experience}
          likes={story.likes}
          what_i_did={story.what_i_did}
          how_life_changed={story.how_life_changed}
        />
      ))}
    </div>
  );
};
export default Stories;
