import React from 'react';
import MediaItem from "./MediaItem";

export default class MediaList extends React.PureComponent {
    render() {
        const {mediaList, isLoading, isSearched} = this.props;

        if (!isSearched) {
            return (
                <h3 className="mt-4">
                    <b>Please select that interests you</b>
                </h3>
            )
        } else if (isLoading) {
            return (
                <h2 className="mt-4">
                    <b>Loading...</b>
                </h2>)
        }

        return (
            <div>
                {mediaList.length !== 0 ? (
                    <div className='row mt-4'>
                        {mediaList.map(item => (
                            <div className='col-12 col-md-6 mb-2' key={item.trackId}>
                                <MediaItem item={item}/>
                            </div>
                        ))}
                        </div>
                ) : (
                    <h3 className="mt-4">
                        <b>The search returned no results. Change the filters.</b>
                    </h3>
                )}
                </div>
        );
    }
}