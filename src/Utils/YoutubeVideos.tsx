import PropTypes from 'prop-types';

type YoutubeVideoProps = {
    id: string,
    name: string
}

const YoutubeVideos = (props: YoutubeVideoProps) => {
    // noinspection XmlDeprecatedElement
    return (
        <div>
            <iframe width="921" height="518" src={"https://www.youtube.com/embed/" + props.id} title={props.name}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    );
};

YoutubeVideos.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
};

export default YoutubeVideos;