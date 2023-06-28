'use client';

import Image, { StaticImageData } from "next/image";

type VideoCardProps = {
    title: string;
    // onClick: (event: React.MouseEvent<any>) => void;
    tumbnail: StaticImageData;
};

const VideoCard: React.FC<VideoCardProps> = (props) => {
    const { title, tumbnail } = props;

    return (
        <div className="video-card">
            <div className="video-card-image">
                <Image title="Tumbnail" src={tumbnail} alt="Tumbnail" width={undefined} height={undefined} style={{ width: "100%"}} />
            </div>
            <div className="video-card-content">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default VideoCard;