import React, { useState } from "react";
import logo from '../Assets/Img/xhockware.jpg';


export const Articles = (props) => {
    const [articles, setArticles] = useState({})
    const [singlearticle, setSingleArticles] = useState('')
    React.useEffect(() => {
        getArticles()

    }, []);
    const getSingleArticle = (prop) => {
        setSingleArticles(prop)
        

    }



    const getArticles = async () => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://localhost:8000/v1/news/',
            headers: {}
        };

        axios(config)
            .then(function (response) {

                let i = 0;
                setArticles(response.data.articles)
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    const [artXpage, setArtXpage] = React.useState(10)
    const [page, setPage] = React.useState(1)
    const [countpage, setCountPage] = React.useState([])
    const [findingTitle, setFindingTitle] = React.useState('')
    let pageArray = [];
    const getPagination = (prop) => {
        
        setPage(prop.target.value)
    }
    const setPagination = (prop) => {
        for (let index = 0; index < Math.ceil(prop / 10); index++) {
            pageArray[index] = index;
        }
    }
    const [show, setShow] = React.useState(false)
    const unsetSingleArticle = () => {
        setSingleArticles('');
    }
    React.useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000)
    }, [show])

    if (!show) return null
    const findTitle = (prop) => {
        
        setFindingTitle(prop.target.value)

    }
    if (singlearticle == '') {

        return (
            <div className="container">
                <h1>XhockWare Test <img src={logo} /></h1>
                <p> <label>
                    <p>Write a title</p>
                    <input type="text" className="input_Search" name="title" onChange={(e) => findTitle(e)} />
                </label></p>
                <div className="Articles_section">

                    {

                        articles.map((item, index) => {
                            setPagination(index + 1)
                            
                            if ((index >= ((page - 1) * artXpage)) && (index < ((page) * artXpage))) {
                                if (findingTitle.trim() == '') {
                                    return (
                                        <div>
                                            <div className="" onClick={() => getSingleArticle(item)}>
                                                <div className="Article_Box ">
                                                    <div className="Article_thumbnail">

                                                        <img className="Article_thumbnail" src={item.urlToImage} />

                                                    </div>
                                                    <div className="container">
                                                        <span><b>Title: </b>{item.title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {

                                    let findItemTitle = item.title.toUpperCase();
                                    if (findItemTitle.indexOf(findingTitle.toUpperCase()) == 0) {

                                        return (
                                            <div>
                                                <div className="" onClick={() => getSingleArticle(item)}>
                                                    <div className="Article_Box ">
                                                        <div className="Article_thumbnail">

                                                            <img className="Article_thumbnail" src={item.urlToImage} />

                                                        </div>
                                                        <div className="container">
                                                            <span><b>Title: </b>{item.title}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                }
                            }
                        })

                    }
                    <select onChange={(e) => getPagination(e)} className="pagination_select">
                        {
                            pageArray.map((item, index) => {
                                let showPage = item + 1

                                return (
                                    <option value={showPage} >{showPage}</option>
                                )
                            })
                        }

                    </select>
                </div>
                <div className="single_Articles_section">


                </div>
            </div>
        )
    } else {
        return (
            <div className="">
                <h1>XhockWare Test <img src={logo} /></h1>
                <p> <label>
                    <p>Write a title</p>
                    <input type="text" className="input_Search" name="title" onChange={(e) => findTitle(e)} />
                </label></p>
                <div className="Articles_section">
                    {
                        articles.map((item, index) => {
                            setPagination(index + 1)
                            if ((index >= ((page - 1) * artXpage)) && (index < ((page) * artXpage))) {
                                if (findingTitle.trim() == '') {
                                    return (
                                        <div>
                                            <div className="" onClick={() => getSingleArticle(item)}>
                                                <div className="Article_Box ">
                                                    <div className="Article_thumbnail">

                                                        <img className="Article_thumbnail" src={item.urlToImage} />

                                                    </div>
                                                    <div className="container">
                                                        <span><b>Title: </b>{item.title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {

                                    let findItemTitle = item.title.toUpperCase();
                                    if (findItemTitle.indexOf(findingTitle.toUpperCase()) == 0) {

                                        return (
                                            <div>
                                                <div className="" onClick={() => getSingleArticle(item)}>
                                                    <div className="Article_Box ">
                                                        <div className="Article_thumbnail">

                                                            <img className="Article_thumbnail" src={item.urlToImage} />

                                                        </div>
                                                        <div className="container">
                                                            <span><b>Title: </b>{item.title}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                }
                            }
                        })
                    }
                    <select onChange={(e) => getPagination(e)} className="pagination_select">
                        {
                            pageArray.map((item, index) => {
                                let showPage = item + 1

                                return (
                                    <option value={showPage} >{showPage}</option>
                                )
                            })
                        }


                    </select>
                </div>
                <div className="single_Articles_section">
                    <div className="single_article_box ">
                        <span class="material-icons-outlined close" onClick={() => unsetSingleArticle()}>
                            close
                        </span>
                        <div>
                            <h3>{singlearticle.title} </h3>
                            <img className="single_article_img" src={singlearticle.urlToImage} />

                            <span className="Article_content">
                                <p><small >Publication date: {singlearticle.publishedAt}</small></p>
                                
                                <p>
                                    {singlearticle.content}
                                </p>
                                <p className="author"><small className="author">-Author: {singlearticle.author}</small></p>

                            </span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
export default Articles;