import React from 'react';

export default class Filters extends React.Component {
    static defaultProps = {
        mediaType : [
            {label: 'All', value: 'all'},
            {label: 'Movie', value: 'movie'},
            {label: 'Podcast', value: 'podcast'},
            {label: 'Music', value: 'music'},
            {label: 'Video', value: 'musicVideo'},
            {label: 'Audiobook', value: 'audiobook'},
            {label: 'Short Film', value: 'shortFilm'},
            {label: 'TVShow', value: 'tvShow'},
            {label: 'Software', value: 'software'},
            {label: 'Ebook', value: 'ebook'}
        ]
    };

    keyPress = (e) => {
        if (e.keyCode === 13) {
            this.props.getMediaList()
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.keyPress)
    };

    render() {
        const {term, media, mediaType, startSearch, isLoading, onChange} = this.props;

        return (
            <div>
                <div className='form-group'>
                    <label><h4><b>Search</b></h4></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for interesting content"
                        name='term'
                        value={term}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="media"><h4><b>Media type</b></h4></label>
                    <select
                        className="form-control"
                        id="media"
                        name='media'
                        value={media}
                        onChange={onChange}
                    >
                        {mediaType.map(option => {
                            return <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        })}
                    </select>
                </div>
                <button
                    type='button'
                    className='btn btn-light btn-lg'
                    disabled={isLoading}
                    onClick={startSearch}
                >
                    Search
                </button>
            </div>
        );
    }
}