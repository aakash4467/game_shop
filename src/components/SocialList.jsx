import React from 'react'

const SocialList = ({ item }) => {
  return (
    <li>
        <a href="#" className={item.className}>
            <i className={`bi ${item.icon}`}></i>
        </a>
    </li>
  )
}

export default SocialList
