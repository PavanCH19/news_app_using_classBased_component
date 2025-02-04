import { Component } from "react";
import "../component_css/new_container.css";
import NewsCard from "./NewsCard";
import PropTypes from "prop-types";
import articleData from "./data";
import { FaExclamationTriangle } from 'react-icons/fa';



class New_container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: articleData,
            start: 0,
            end: props.cdl,
            category: props.category,
            randomNumbers: [],
            transitionClass: "",
            isLoading: true,
            isData: false,
        };
    }

    async componentDidMount() {
        this.fetchArticles(this.state.category);
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            this.setState({ category: this.props.category, start: 0, end: this.props.cdl, isLoading: true });
            this.fetchArticles(this.props.category);
        }
    }

    fetchArticles = async (category) => {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        try {
            this.props.progress(2);
            const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;
            const res = await fetch(url);
            this.props.progress(20);
            const data = await res.json();
            this.props.progress(40);

            if (data.articles && data.articles.length > 0) {
                this.props.progress(60);
                this.setState({
                    article: data.articles,
                    randomNumbers: this.generateRandomNumbers(data.articles.length),
                    isLoading: false,
                });
                this.props.progress(100);
            } else {
                this.setState({
                    article: articleData,
                    randomNumbers: this.generateRandomNumbers(articleData.length),
                    isLoading: false,
                });
            }
        } catch (err) {
            console.error("Error fetching news:", err);

            setTimeout(() => {
                this.setState({
                    article: articleData,
                    randomNumbers: this.generateRandomNumbers(articleData.length),
                    isLoading: false,
                    isData: true,
                });
                this.props.progress(5);
            }, 1000)
            this.props.progress(20);
        }
    };

    generateRandomNumbers = (length) => {
        let uniqueSet = new Set();
        while (uniqueSet.size < length) {
            uniqueSet.add(Math.floor(Math.random() * length));
        }
        return Array.from(uniqueSet);
    };

    handlePrevious = () => {
        this.setState({ transitionClass: "slide-prev" });

        setTimeout(() => {
            this.setState((prevState) => {
                let newStart = Math.max(prevState.start - this.props.cdl, 0);
                let newEnd = newStart + this.props.cdl;
                return { start: newStart, end: newEnd };
            });
        });

    };


    handleNext = () => {
        this.setState({ transitionClass: "slide-next" });

        setTimeout(() => {
            this.setState((prevState) => {
                let newStart = prevState.start + this.props.cdl;
                let newEnd = Math.min(newStart + this.props.cdl, this.state.article.length);
                return { start: newStart, end: newEnd };
            });
        });
    };

    render() {
        const { start, end, randomNumbers, article, isLoading, isData } = this.state;
        console.log(import.meta.env.REACT_APP_NEWS_API_KEY)

        return (<>
            {isData && (
                <div className="alert alert-danger d-flex align-items-center justify-content-center " role="alert">
                    <FaExclamationTriangle size={24} color="orange" /> check your internet connection
                </div>
            )}
            <div className="content">
                <div className="news-data-container">
                    <div className={`main-content ${this.state.transitionClass}`}>
                        {randomNumbers.slice(start, end).map((randNo, index) => (
                            <NewsCard key={index} article={article[randNo]} loading={isLoading} />
                        ))}
                    </div>
                    <div className="button-container">
                        <button className="prev-btn" onClick={this.handlePrevious} disabled={start === 0}>
                            <span className="arrow">&#8592;</span> Previous
                        </button>
                        <button className="next-btn" onClick={this.handleNext} disabled={end >= article.length}>
                            Next <span className="arrow">&#8594;</span>
                        </button>
                    </div>
                </div>

                <aside className="related-news">
                    <h3>Related News</h3>
                    <ul>
                        {randomNumbers.slice(end, end + this.props.cdl).map((randNo, index) => {
                            const news = article[randNo];
                            return news && news.url ? (
                                <li key={index}>
                                    <a href={news.url} target="_blank" rel="noopener noreferrer">
                                        {news.title}
                                    </a>
                                </li>
                            ) : null;
                        })}
                    </ul>
                </aside>
            </div></>
        );
    }
}

New_container.propTypes = {
    cdl: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    progress: PropTypes.func.isRequired
};

export default New_container;


//functional based component

// import { useEffect, useState } from "react";
// import "../component_css/new_container.css";
// import NewsCard from "./NewsCard";
// import PropTypes from "prop-types";
// import articleData from "./data";
// import { FaExclamationTriangle } from "react-icons/fa";

// const New_container = (props) => {
//     const [article, setArticle] = useState(articleData);
//     const [start, setStart] = useState(0);
//     const [end, setEnd] = useState(props.cdl);
//     const [randomNumbers, setRandomNumbers] = useState([]);
//     const [transitionClass, setTransitionClass] = useState("");
//     const [isLoading, setIsLoading] = useState(true);
//     const [isData, setIsData] = useState(false);


//     useEffect(() => {
//         setStart(0);
//         setEnd(props.cdl);
//         setIsLoading(true);
//         fetchArticles(props.category);
//     }, [props.category, props.cdl]);

//     const fetchArticles = async (category) => {
//         try {
//             props.progress(2);
//             const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.VITE_NEWS_API_KEY}`;
//             const res = await fetch(url);
//             props.progress(20);
//             const data = await res.json();
//             props.progress(40);

//             if (data.articles && data.articles.length > 0) {
//                 props.progress(60);
//                 setArticle(data.articles);
//                 setRandomNumbers(generateRandomNumbers(data.articles.length));
//                 setIsLoading(false);
//                 setIsData(false);
//                 props.progress(100);
//             } else {
//                 setArticle(articleData);
//                 setRandomNumbers(generateRandomNumbers(articleData.length));
//                 setIsLoading(false);
//             }
//         } catch (err) {
//             console.error("Error fetching news:", err);
//             setTimeout(() => {
//                 setArticle(articleData);
//                 setRandomNumbers(generateRandomNumbers(articleData.length));
//                 setIsLoading(false);
//                 setIsData(true);
//             }, 1000);
//         }
//     };

//     const generateRandomNumbers = (length) => {
//         let uniqueSet = new Set();
//         while (uniqueSet.size < length) {
//             uniqueSet.add(Math.floor(Math.random() * length));
//         }
//         return Array.from(uniqueSet);
//     };

//     const handlePrevious = () => {
//         setTransitionClass("slide-prev");

//         setTimeout(() => {
//             setStart((prevStart) => Math.max(prevStart - props.cdl, 0));
//             setEnd((prevStart) => Math.max(prevStart - props.cdl, 0) + props.cdl);
//         }, 300);
//     };

//     const handleNext = () => {
//         setTransitionClass("slide-next");

//         setTimeout(() => {
//             setStart((prevStart) => prevStart + props.cdl);
//             setEnd((prevStart) => Math.min(prevStart + props.cdl, article.length));
//         }, 300);
//     };

//     return (
//         <>
//             {isData && (
//                 <div className="alert alert-danger d-flex align-items-center justify-content-center " role="alert">
//                     <FaExclamationTriangle size={24} color="orange" /> Check your internet connection
//                 </div>
//             )}
//             <div className="content">
//                 <div className="news-data-container">
//                     <div className={`main-content ${transitionClass}`}>
//                         {randomNumbers.slice(start, end).map((randNo, index) => (
//                             <NewsCard key={index} article={article[randNo]} loading={isLoading} />
//                         ))}
//                     </div>
//                     <div className="button-container">
//                         <button className="prev-btn" onClick={handlePrevious} disabled={start === 0}>
//                             <span className="arrow">&#8592;</span> Previous
//                         </button>
//                         <button className="next-btn" onClick={handleNext} disabled={end >= article.length}>
//                             Next <span className="arrow">&#8594;</span>
//                         </button>
//                     </div>
//                 </div>

//                 <aside className="related-news">
//                     <h3>Related News</h3>
//                     <ul>
//                         {randomNumbers.slice(end, end + props.cdl).map((randNo, index) => {
//                             const news = article[randNo];
//                             return news && news.url ? (
//                                 <li key={index}>
//                                     <a href={news.url} target="_blank" rel="noopener noreferrer">
//                                         {news.title}
//                                     </a>
//                                 </li>
//                             ) : null;
//                         })}
//                     </ul>
//                 </aside>
//             </div>
//         </>
//     );
// };

// New_container.propTypes = {
//     cdl: PropTypes.number.isRequired,
//     category: PropTypes.string.isRequired,
//     progress: PropTypes.func.isRequired
// };

// export default New_container;
