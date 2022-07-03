import React, { useEffect, useState, useRef } from 'react'
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';
import axios from 'axios'
import { Loading } from './components/Loading'
import { InfiniteScroller } from './layouts/InfiniteScroller'

const App = () => {
  return (
    <RecoilRoot>
      <div className='App'>
        <InfiniteScroller />
      </div>
    </RecoilRoot>
  )
}

export default App
