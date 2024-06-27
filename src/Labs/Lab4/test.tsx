const handleClick = (parameter = "Hello") => {
    console.log(parameter)
  }

  export default function test() {
    return (
      <div id="wd-click-event">
        <button onClick={() => handleClick("Hello")}>
  Hello
</button>


      </div>

      
  );}
   