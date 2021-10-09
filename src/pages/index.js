import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row,Col,Card , Avatar} from 'antd';
import { BackTop } from 'antd';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
const HomePage=()=>{
    
    const { Meta } = Card;
    const [data,setData]= useState([]);
    const [show,setShow]=useState(false);
    const [character,setCharacter]=useState({});
   
    
    const getData=()=>
    {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
        axios.get('https://rickandmortyapi.com/api/character')
        .then(res=>
            {
                if(res)
                {
                    console.log('response',res.data.results);
                    setData(res.data.results);
                    
                }
            })
            .catch(err=>{
                console.log("error");
            })
    }
    useEffect(()=>{
        getData();
    },[]);
    return(
        <div style={{color:"black"}}>
            <center><h1 style={{paddingTop:20}}><img src="https://img.icons8.com/plasticine/100/000000/rick-sanchez.png"/> & <img src="https://img.icons8.com/plasticine/100/000000/morty-smith.png"/></h1></center>
           
            <BackTop >
            <img src="https://img.icons8.com/plasticine/50/000000/morty-smith.png"/>
                </BackTop>
                {show==true?(<div style={{paddingTop:30,paddingBottom:50}}>
                    <center>
                    <Flippy
    flipOnHover={true} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
     // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '300px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide
    //   style={{
    //     backgroundColor: '#41669d',
    //   }}
    >
        <div style={{paddingTop:25}}>
            <center>
      <span align="left" style={{fontSize:20,paddingRight:20}}>{character.name}</span>
     
      <Avatar  size={100} src={character.image}/></center></div>
    </FrontSide>
    <BackSide
    //   style={{ backgroundColor: '#175852'}}
      >
           <div style={{paddingTop:25}}>
            <center>
      <b>Species: </b>{character.species}
      <br></br>
      <b>Status: </b>{character.status}
      <br></br>
      <b>Location: </b>{character.location.name}
      <br></br>
      <b>Origin: </b>{character.origin.name}
      </center></div>
    </BackSide>
  </Flippy>
                    </center>
                </div>):(<div style={{paddingTop:130,paddingBottom:150}}><center>Press any card and get to know about the character you choose!</center></div>)}
        <Row gutter={[, 48]}>
            {data.map(data=>(
                <Col xs={{ span:16,offset:3 }} sm={{span:6,offset:1}} md={{span:6,offset:1}} lg={{ span:6,offset:1 }} xl={{span:6,offset:1}}>
                   
                <Card
                onClick={()=>{
                    setShow(true);
                setCharacter(data); 
                }}
    // cover={
    //   <img
    //     alt="example"
    //     src={data.image}
    //   />
    // }
   
  >
    <Meta
      avatar={<Avatar src={data.image} />}
      title={data.name}
      description={data.gender}
    />
  </Card>
                
              </Col>
            ))}
      
      </Row>
      <br></br>
      <br></br>
      <footer>
          
            <center><img src="https://img.icons8.com/plasticine/100/000000/rick-sanchez.png"/><img src="https://img.icons8.com/plasticine/100/000000/jerry-smith.png"/><img src="https://img.icons8.com/plasticine/100/000000/morty-smith.png"/><img src="https://img.icons8.com/plasticine/100/000000/summer-smith.png"/><img src="https://img.icons8.com/plasticine/100/000000/beth-smith.png"/></center>
            <br></br>
            <center><img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/30/000000/external-tea-cup-ux-and-ui-flatart-icons-lineal-color-flatarticons.png"/> by <a href="https:github.com/procheta1999" target="__blank">Procheta Bhattacharyya</a></center>
</footer>
        </div>
    )
}
export default HomePage;
