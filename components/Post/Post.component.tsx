import React, { useCallback, useState} from 'react';
import { StyleSheet, Text, View, FlatList, SectionList, Image } from 'react-native';
import Slider from 'react-slick';
import {
  StyledPost,
  Head,
  Label,
  Rating,
  Body,
  Photoes,
  Time,
  Footer
} from './Post.styled';
//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';


const Post = ({data}) => {
  const {popularity, 
    vote_count, 
    video, 
    poster_path, 
    id, 
    adult, 
    backdrop_path, 
    original_language, 
    original_title, 
    genre_ids, 
    title, 
    vote_average, 
    overview, 
    release_date} = data;
  var picURI='https://image.tmdb.org/t/p/original'+backdrop_path;

  
    const [count, getCount]= useState(0);
  return(
    <StyledPost onClick={()=>getCount(count+1)}>
      <Head>
        <Label>{title}</Label>
        <Rating>{popularity}</Rating>
      </Head>
      <Photoes>
        <Image
          source={{uri: picURI}}
          style={{width:"inherit", height: "inherit"}}
        />
      </Photoes>
      <Body>{count%2 === 0 ? '' : overview}</Body>
      <Footer>
        <Time>Release Date: {release_date}</Time>
      </Footer>
    </StyledPost>
  )
}
/*
const Post = ({ item }: IPostProps) => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500
  };

  return (
    
      <Head>
        <Label>{item.}</Label>
        <Author>{item.username}</Author>
      </Head>
      <Body>
        
          <Slider {...settings}>{item.photoes}</Slider>
        </Photoes>
        <Text>{item.comment}</Text>
        <Time>{item.date}</Time>
      </Body>
      <Footer>
        <Comments>
          <p>Comments here</p>
        </Comments>
      </Footer>
    
  );
};
*/
export default Post;
