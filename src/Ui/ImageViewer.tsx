interface ImageViewerProps {
  src: string;
}

const ImageViewer = ({ src }: ImageViewerProps) => {
  return <img src={src} />;
};

export default ImageViewer;
