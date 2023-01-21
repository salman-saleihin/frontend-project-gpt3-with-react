import React from 'react';
import { Article } from '../../components'
import './Blog.css' ;
import {blog01 , blog02 , blog03 , blog04 , blog05 } from './imports'

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
                <div className='gpt3__blog-heading'>
                    <h1 className='gradient__text'>A lot is happening,
                     We are blogging about it.
                     </h1>
                </div>

                <div className='gpt3__blog-container'>
                     <div className='gpt3__blog-container__groupA'>
                        <Article imgUrl={blog01} date="Jan 21, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"> </Article>
                    </div> 

                    <div className='gpt3__blog-container__groupB'>
                        <Article imgUrl={blog02} date="Jan 21, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"> </Article>
                        <Article imgUrl={blog03} date="Jan 21, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"> </Article>
                        <Article imgUrl={blog04} date="Jan 21, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"> </Article>
                        <Article imgUrl={blog05} date="Jan 21, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"> </Article>
                    </div>                                     
                </div>
        </div>
    );
};

export default Blog;