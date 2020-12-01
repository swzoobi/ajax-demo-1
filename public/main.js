// 请求 css 资源
getCSS.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open('GET','/2.css')
  request.onreadystatechange = () =>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        const style = document.createElement('style')
        style.innerHTML = request.response;
        document.head.appendChild(style)
      }else{
        alert('请求 CSS 失败')
      }
    }
  }
  request.send()
}

// 请求 js 资源
getJS.onclick = () =>{
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
  const request = new XMLHttpRequest()
  request.open('GET','/3.html')
  request.onreadystatechange = () =>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.insertBefore(div,document.getElementsByTagName('h1')[0])
      }else{
        alert('请求 HTML 失败')
      }
    }
  }
  request.send()
}

// 请求 XML 资源
getXML.onclick = () =>{
  const request = new XMLHttpRequest()
  request.open('GET','/4.xml')
  request.onreadystatechange = () =>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300 ){
        const dom = request.responseXML
        const text = (dom.getElementsByTagName('warning')[0].innerHTML).trim()
        alert(`XML的warning节点内容为：${text}`)
      }else{
        alert('请求 XML 失败')
      }
    }
  }
  request.send()
}

// 请求 JSON 资源
getJSON.onclick = () =>{
  const request = new XMLHttpRequest()
  request.open('GET','/5.json')
  request.onreadystatechange = () =>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300 ){
        const object = JSON.parse(request.response)
        console.log(object)
        const p = document.createElement('p')
        p.innerText = `欢迎你，${object.name}`
        welcome.appendChild(p)
      }else{
        alert('请求 JSON 失败')
      }
    }
  }
  request.send()
}

let num = 1
// 请求下一页数据
getPage.onclick = () =>{
  const request = new XMLHttpRequest()
  request.open('GET',`/page${num+1}`)
  request.onreadystatechange = () =>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status <300 ){
        let array = JSON.parse(request.response)
        array.map(item => {
          let li = document.createElement('li')
          li.innerText = item.id
          xxx.appendChild(li)
        })
        num += 1
      }else{
        alert('无数据')
      }
    }
  }
  request.send()
  
}