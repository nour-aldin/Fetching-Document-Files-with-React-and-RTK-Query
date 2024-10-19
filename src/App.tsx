import { useGetImageQuery } from "./redux/api";
import Box from "./Ui/Box";
import Error from "./Ui/Error";
import ImageViewer from "./Ui/ImageViewer";
import Loading from "./Ui/Loading";

function App() {
  const { data: imageSrc, isLoading, isError } = useGetImageQuery({});

  const content = isLoading ? (
    <Loading />
  ) : isError ? (
    <Error />
  ) : (
    <ImageViewer src={imageSrc} />
  );

  return <Box>{content}</Box>;
}

export default App;
