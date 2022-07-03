export const Loading = ( props:{ load:Boolean } ) => {
  return(
    <div className={ `${ props.load ? 'flex' : 'hidden' } justify-center p-10` }>
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div>
  )
}