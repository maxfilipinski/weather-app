import DotLoader from 'react-spinners/DotLoader';

const Spinner = (props) => {
  return (
    <DotLoader
      color="#c2c2c2"
      loading={props.loading}
      size={120}
      aria-label="Loading spinner"
    />
  );
};

export default Spinner;
