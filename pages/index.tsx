import type { NextPage } from "next"
import { useState } from "react"
import CategoryCard from "../components/categoryCard"
import EmojiCard from "../components/emojiCard"
import Layout from "../components/layout"
import List from "../components/list"
import emojisData from "../data/emojis"

const Home: NextPage = () => {
  const [filterEmojis, setFilterEmojis] = useState(emojisData)

  const handleFilterBySearch = (search: string) => {
    if (search.length > 0) {
      setFilterEmojis(
        emojisData.filter((emoji) => {
          return emoji.name.toUpperCase().includes(search.toUpperCase().trim())
        })
      )
    } else {
      setFilterEmojis(emojisData)
    }
  }

  const handleFilterByCategory = (category: string) => {
    setFilterEmojis(
      emojisData.filter((emoji) => {
        return emoji.group.toUpperCase().includes(category.toUpperCase())
      })
    )
  }

  return (
    <div>
      <Layout>
        <h1 className="text-2xl md:text-5xl font-bold text-gray-600 text-center tracking-wide">
          Emojis de la aplicación
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            id="name"
            placeholder="Buscar un emoji"
            className="w-full border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1"
            onChange={(e) => handleFilterBySearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          <CategoryCard
            emoji="😃"
            group={"Smileys & Emotion"}
            handleFilter={handleFilterByCategory}
          />
          <CategoryCard
            emoji="👨🏻"
            group={"People & Body"}
            handleFilter={handleFilterByCategory}
          />
          <CategoryCard
            emoji="🐶"
            group={"Animals & Nature"}
            handleFilter={handleFilterByCategory}
          />
          <CategoryCard
            emoji="🍔"
            group={"Food & Drink"}
            handleFilter={handleFilterByCategory}
          />
          <CategoryCard
            emoji="⚽"
            group={"Activities"}
            handleFilter={handleFilterByCategory}
          />
          <CategoryCard
            emoji="🏛️"
            group={"Travel & Places"}
            handleFilter={handleFilterByCategory}
          />
          <CategoryCard
            emoji="🗜️"
            group={"Objects"}
            handleFilter={handleFilterByCategory}
          />
          <CategoryCard
            emoji="⚠️"
            group={"Symbols"}
            handleFilter={handleFilterByCategory}
          />
          <CategoryCard
            emoji="🚩"
            group={"Flags"}
            handleFilter={handleFilterByCategory}
          />
        </div>
        <List emojis={filterEmojis} />
      </Layout>
    </div>
  )
}

export default Home
