// 请求 css 资源
getCSS.onclick = ()=>{
  ajax('/2.css',(request)=>{
    const style = document.createElement('style')
    style.innerHTML = request.response;
    document.head.appendChild(style)
  },'请求CSS失败')
}

// 请求 js 资源
getJS.onclick = () =>{
  ajax('/2.js',(request) =>{
    const script = document.createElement('script')
    script.innerHTML = request.response
    document.body.appendChild(script)
  },'请求 JS 失败')
  return;
  const request = new XMLHttpRequest()
  request.open('GET','/2.js')
  request.onreadystatechange = () =>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
      }else{
        alert('请求 JS 失败')
      }
    }
  }
  request.send()
}

// 请求 HTML 资源
getHTML.onclick = () =>{
  ajax('/3.html',(request) => {
    const div = document.createElement('div')
    div.innerHTML = request.response
    document.body.insertBefore(div,document.getElementsByTagName('h1')[0])
  },'请求 HTML 失败')
}

// 请求 XML 资源
getXML.onclick = () =>{
  ajax('/4.xml',(request)=>{
    const dom = request.responseXML
    const text = (dom.getElementsByTagName('warning')[0].innerHTML).trim()
    alert(`XML的warning节点内容为：${text}`)
  },'请求 XML 失败')
}

// 请求 JSON 资源
getJSON.onclick = () =>{
  ajax('/5.json',(request) =>{
    const object = JSON.parse(request.response)
    console.log(object)
    const p = document.createElement('p')
    p.innerText = `欢迎你，${object.name}`
    welcome.appendChild(p)
  },'请求 JSON 失败')
}

let num = 1
// 请求下一页数据
getPage.onclick = () =>{
  ajax(`/page${num+1}`,(request) =>{
    let array = JSON.parse(request.response)
    array.map(item => {
      let li = document.createElement('li')
      li.innerText = item.id
      xxx.appendChild(li)
    })
    num += 1
  },'无数据')
}

// 封装ajax
const ajax = (url,callback,errorMsg) =>{
  const request = new XMLHttpRequest()
  request.open('GET',url)
  request.onreadystatechange = () =>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300 ){
        callback(request);
      }else{
        alert(errorMsg)
      }
    }
  }
  request.send()
}