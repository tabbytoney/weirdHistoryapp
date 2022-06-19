import RenderPeople from '../features/people/RenderPeople';

const PeopleInfoScreen = ({ route }) => {
  const { people } = route.params;
  return <RenderPeople people={people} />;
};

export default PeopleInfoScreen;
