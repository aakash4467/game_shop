import React from 'react'

const NavListItem = ({ item }) => {
  return (
    <li>
        <a href="#">
            <i className={`bi ${item.icon}`}></i>
            <span className='navName'>{item.name}</span>
        </a>
    </li>
  )
}

export default NavListItem
