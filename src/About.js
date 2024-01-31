
import {  useTranslation } from 'react-i18next';
import './App.css';
import Contact from './Contact';




function About (){

   
const {i18n, t}= useTranslation();


const toggleLang = () => {
i18n.changeLanguage(i18n.language === 'en'? 'ru' : 'en')
  }



    return (
        <div>
          
        <div className='trans'>
            <div className="AboutMe">
            < img src="https://cdn.glitch.global/a652ea77-d25b-444d-8ad0-c70a0b261a2e/me2.jpeg?v=1678972205143" width="200px"  alt="me"/>
            </div>
           
      <div className="AboutMe">
        <h1 className="header">{t('Welcome to me')}</h1>
            <p>{t('About')}</p>
            <p>{t('work')}</p>
            <p>{t('works')}</p>
            <p>{t('worksTwo')}</p>
        </div>  
        <div className="AboutMe">
      <button onClick={toggleLang} >
        {i18n.language === 'en' ? 'RU': 'EN'}
      </button>
      </div>
      </div> 


<div className='Price'>
<div  className='header'>
    <h2 > I work:</h2>
</div>
      <div className='blok' >
<h3>Time:</h3>
<p>lasts from 2 hours</p>
      </div>
      <div className='blok'>
     <h3> Quantity: </h3>
     <p> 30 photos with editing  </p>  
      </div>
      <div className='blok'>
      <h3>Price:</h3>
      <p> from 400 fr</p>
      </div>
      <div className='blok'>
      <h3>Not included:</h3>
      <p> assistant work and studio cost</p>
      </div>
      </div>
    
      </div>
    )
}

export default About;