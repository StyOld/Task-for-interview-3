import React from 'react';

export default class MediaItem extends React.PureComponent {
    render() {
        const {item} = this.props;

        return (
            <div className="card">
                <div className="card-body row">
                    <div className="col-12 col-lg-5">
                        <img width="100%" src={item.artworkUrl100} alt="" />
                    </div>
                    <div className="col-12 col-lg-7">
                        <h4>
                            <b>
                                <a href={item.previewUrl} target="_blank">
                                    {item.trackName}
                                </a>
                            </b>
                        </h4>
                        <div>
                            <b>Artist:</b>{" "}
                            <a href={item.artistViewUrl} target="_blank">
                                {item.artistName}
                            </a>
                        </div>
                        <div>
                            <b>Album:</b>{" "}
                            <a href={item.collectionViewUrl} target="_blank">
                                {item.collectionName}
                            </a>
                        </div>
                        <div>
                            <b>Type:</b> {item.kind}
                        </div>
                        <div>
                            <b>Genre:</b> {item.primaryGenreName}
                        </div>
                        <div>
                            <b>ReleaseDate:</b> {item.releaseDate.substring(0,10)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}