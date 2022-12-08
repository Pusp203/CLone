import React from 'react'
import './brand.css'

const Brand = () => {
  return (
    <div className='brand-intiate'>
    <section className='about-text'>Who we are</section>
      <div className='about-container__part_description' >Five years ago, Viktor Ihnatiuk’s peer to peer lending company was acquired. He was 21 years old. Later, the young fintech veteran <br/>built a product development outsourcing team of industry experts to tackle a number of projects including ones in <a href='https://google.com'>fintech</a>, <a href='https://boostylabs.com/blockchain'> blockchain</a> and cloud storage.</div>
    
      <div className='brand-r'>Attracted by our ability to create products, several market leading companies became our clients. Together we developed cutting-edge digital solutions which addressed customers' dilemmas and helped to improve their business</div>

    <div className='col-md-12'>
    <p className='trusted-brand'>Trusted by global Brands</p>
    </div>

    <div className='col-md-12__img'>
    <img src='https://boostylabs.com/img/parity.svg' className='about-container__img' width='200' height='50' alt='parity'/>
    <img src='https://boostylabs.com/img/McKinsey&Company.svg' className='about-container__img' width='200' height='50' alt='McKinsey and COmpany'/>
    <img src='https://boostylabs.com/img/samsung.svg
    ' className='about-container__img' width='200' height='50' alt='SAMSUNG'/> 
    <img src='https://boostylabs.com/img/vodafone.svg
    ' className='about-container__img' width='200' height='50' alt='vodafone'/>
     
    <img src='https://boostylabs.com/img/alfabank.png
    ' className='about-container__img' width='200' height='50' alt='Alfabank'/>
    </div>
    </div>
  )
}

export default Brand
