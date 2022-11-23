function NotFound(){
  return(
    <div className = "error-page">
      <img src={process.env.PUBLIC_URL + "/img/er404.png"} width="50%"/>
      <h1>페이지를 찾을 수가 없어요</h1>
      <p>
        홈으로 이동해서
        <br/>
        다시 한번 페이지를 찾아볼까요?
      </p>
    </div>
  )
}

export default NotFound