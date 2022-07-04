import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil'
import { Loading } from '../components/Loading'
import { Error } from '../components/Error'
import { loadState } from '../recoil/GlobalState'

export const InfiniteScroller = () => {
  const refOffset = useRef(0)
  const [pokemon, setPokemon] = useState<String[]>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useRecoilState(loadState)

  const loadMorePokemon = () => {
    setLoading(true)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ refOffset.current }`)
      .then(({ data }) => {
        const newPokemon: Array<String> = []
        data.results.forEach(( p:{ name: String, url: String } ) => newPokemon.push(p.name))
        setPokemon( (oldPokemon:Array<String>) => [ ...oldPokemon, ...newPokemon ] )
      })
      .then(() => {
        setLoading(false)
      })
      .catch((e) => {
        setError(true)
        setLoading(false)
      })
      refOffset.current += 10
  }

  const handleScroll = (e:any) => {
    if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
      loadMorePokemon()
    }
  }
  
  useEffect(() => {
    loadMorePokemon()
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      { pokemon.map(( value, key ) => {
        return (
          <div className='text-center border p-10' key={ key }>{ key + 1 }.{ value }</div>
        )
      }) }
      <Error error={ error } />
      <Loading load={ loading } />
    </div>
  )
}
