import { Component } from "react";
import PropTypes from "prop-types";
import "../component_css/news_card.css";

class NewsCard extends Component {
    render() {
        const { article, loading } = this.props;

        if (!article) {
            return <div className="news-card">Loading...</div>;
        }

        return (
            <div className="news-card">
                {loading ? (
                    <div className="news-card-image skeleton"></div>
                ) : article.urlToImage ? (
                    <img
                        src={article.urlToImage}
                        alt={article.title || "No Title"}
                        className="news-card-image"
                    />
                ) : (
                    <div className="news-card-image-placeholder">
                        <span>{article.title || "No Title"}</span>
                    </div>
                )}

                <div className="news-card-content">
                    {loading ? (
                        <>
                            <div className="skeleton skeleton-title"></div>
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-link"></div>
                        </>
                    ) : (
                        <>
                            <h2 className="news-card-title">{article.title || "No Title"}</h2>
                            <p className="news-card-author">By {article.author || "Unknown"}</p>
                            <p className="news-card-description">{article.description || "No Description"}</p>
                            <a href={article.url || "#"} className="news-card-link" target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

NewsCard.propTypes = {
    article: PropTypes.shape({
        urlToImage: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
    }).isRequired,
    loading: PropTypes.bool
};

export default NewsCard;
