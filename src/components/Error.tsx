export const Error = ( props:{ error:Boolean } ) => {
  return(
    <div className={ `${ props.error ? 'flex' : 'hidden' } justify-center p-10` }>
      <p>通信中にエラーが発生しました、更新してください。</p>
    </div>
  )
}