document.documentElement.innerHTML=`<head><script>alert('xss from script in head')</script><img src=x onerror=alert('xss from img head')></head><img src=x onerror=alert('xss from img')><script>alert('xss from script')</script>`+document.documentElement.innerHTML
