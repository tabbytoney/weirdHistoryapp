import RenderStory from '../features/stories/RenderStory';

const StoryInfoScreen = ({ route }) => {
  const { story } = route.params;
  return <RenderStory story={story} />;
};

export default StoryInfoScreen;
