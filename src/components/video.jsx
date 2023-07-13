import "./video.css";
// import '/src/video.mp4' // import local video

function Video() {
  return (
    <>
      <div className="video">
        <iframe
          width="100%"
          height="600px"
          src="https://www.youtube.com/embed/3baSKsdfdlM"
          frameBorder="0"
          allowfullscreen
        ></iframe>
        {/* adding local video */}
        {/* <video controls className="bruhh"> 
        <source src='/src/video.mp4' type="video/mp4" />
      </video> */}
      </div>
    </>
  );
}
export default Video;
