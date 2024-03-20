import React from 'react'
import "../scss/Footer.scss"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="social">
        <h3>Our Social Media</h3>
        <Link to="https://www.instagram.com/cpf_floors/"><i className="fa-brands fa-instagram"></i></Link>
        <Link to="https://www.pinterest.com/cpf_floors/"><i className="fa-brands fa-pinterest-p"></i></Link>
        <Link to="https://www.linkedin.com/company/cpf-floors-llc"><i className="fa-brands fa-linkedin-in"></i></Link>
        <div>
          <Link target='blank' to="https://cpffloors.com/"><p>www.cpffloors.com</p></Link>
        </div>
      </div>
      <span>© 2020 - 2024 CPF FLOORS LLC. All rights reserved</span>
    </footer>
  )
}

export default Footer