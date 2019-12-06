import React from 'react';
import CallApi from "../Api/api";
import Filters from "./Filters";
import MediaList from "./MediaList";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            mediaList: [],
            term: '',
            media: 'all',
            isLoading: false,
            isSearched: false
        };
    };

    getMediaList = () => {
        this.setState(({
            isLoading: true,
            isSearched: true
        }), () => {
            CallApi.post({params: {term: this.state.term, media: this.state.media}})
                .then(data => {
                    this.setState({
                        mediaList: data.results,
                        isLoading: false
                    })
                })
        });
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    startSearch = () => {
        this.getMediaList()
    };

    render() {
        const {mediaList, term, media, isLoading, isSearched} = this.state;

        return (
            <div className='container'>
                <Filters
                    term={term}
                    media={media}
                    isLoading={isLoading}
                    onChange={this.onChange}
                    startSearch={this.startSearch}
                    getMediaList={this.getMediaList}
                />
                <MediaList
                    mediaList={mediaList}
                    isSearched={isSearched}
                    isLoading={isLoading}/>
            </div>
        )
    }
}